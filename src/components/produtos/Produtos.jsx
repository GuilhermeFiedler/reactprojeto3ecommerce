import CardItem from "../cardItem/cardItem";
import styles from "./Produtos.module.css"
//import { useSearchParams } from "react-router-dom";
import useListaProdutoUtils from "../../hook/useListaProdutoUtils";

export default function Produtos(){
    const products = useListaProdutoUtils();
    //const [searchParams, setSearchParams] = useSearchParams();
    //const busca = searchParams.get('busca') || '';
    //const pagina = parseInt(searchParams.get('pagina') || '1');

    /*const handleBusca = (termo) => {
        setSearchParams({busca: termo, pagina: '1'})
    } WIP: paginação e busca*/
    return (
        <div >
        <h1>Lista de Produtos</h1>
        <ul className={styles.productsList}>
        {products.map((product) => (
            <li key={product.id}className={styles.productsItem}>
            <CardItem  product={product}/>
        </li>
        ))}
        
        </ul>
        </div>
    )
}