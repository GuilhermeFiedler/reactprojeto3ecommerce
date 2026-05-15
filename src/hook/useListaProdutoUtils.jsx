import { useEffect, useState } from "react"
import { api } from "../services/api"

export default function useListaProdutoUtils(){
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function getProdutos(){
            try {
                const res = await api.get("/products")
                setProdutos(res)
            } catch (err) {
                console.error(err.message)
            }
        }
        getProdutos();
    }, []);
    
    return produtos;
}