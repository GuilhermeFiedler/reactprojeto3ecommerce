import { useEffect, useState, useMemo } from "react";
import CartContext from "./Cartcontext";
import { api } from "../services/api";
import { useMutation } from "../hook/useMutation";
import useAuth from "../hook/useAuth";

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const {user} = useAuth();

  const userId = user?.user?.id;

  const {
    mutate,
    loading: addLoading
  } = useMutation(async (product) => {

    if (!userId) throw new Error("Usuário não autenticado");

    const res = await api.post("/shoppingcart", {
      userId,
      productId: product.id,
      quantity: 1,
    });
    return res;
  });

  const {
    mutate: deleteMutation,
    loading: deleteLoading,
  } = useMutation(async (cartItemId) => {
    const res = await api.delete(`/shoppingcart/${cartItemId}`);
    return res;
  });

  const {
    mutate: updateMutation,
    loading: updateLoading,
  } = useMutation(async ({ cartItemId, quantity }) => {
    const res = await api.put(`/shoppingcart/${cartItemId}`, {
      quantity,
    });
    return res;
  });

  async function addToCart(product) {
    if(!userId) return;

    const existingProduct = cartProducts.find(
      (item) => item.productId === product.id
    )

    if (existingProduct) {
      return updateCartProduct(
        existingProduct.id,
        existingProduct.quantity + 1
      )
    }

    try {
     const newItem = await mutate(product);

      setCartProducts((prevProducts) => [...prevProducts, {id: newItem.id, productId: product.id, quantity: 1, product,}]);
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteFromCart(cartItemId) {
    try {
      await deleteMutation(cartItemId);
      setCartProducts((prevProducts) =>
        prevProducts.filter((item) => item.id !== cartItemId),
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function updateCartProduct(cartItemId, quantity) {
    if (quantity <= 0){
      return deleteFromCart(cartItemId)
    }
    try {
      await updateMutation({ cartItemId, quantity });
      setCartProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === cartItemId ? { ...item, quantity } : item,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function loadCart(userId){
    const res = await api.get(`/shoppingcart?userId=${userId}&_expand=product`)

    setCartProducts(res)
  }

  useEffect(() => {
    if (!user?.user?.id) return;

    loadCart(user.user.id);
  }, [user])

  const total = useMemo(() => {
    return cartProducts.reduce(
      (acc, item) => acc +item.product?.price * item.quantity, 0) 
  }, [cartProducts])

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, deleteFromCart, addLoading, updateCartProduct, updateLoading, deleteLoading, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
