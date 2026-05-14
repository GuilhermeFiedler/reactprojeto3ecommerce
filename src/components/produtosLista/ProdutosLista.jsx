import CardItem from "../cardItem/cardItem";
import styles from "./Produtos.module.css"
import { useSearchParams } from "react-router-dom";

export default function Produtos(){
    const [searchParams, setSearchParams] = useSearchParams();
    const busca = searchParams.get('busca') || '';
    const pagina = parseInt(searchParams.get('pagina') || '1');

    const handleBusca = (termo) => {
        setSearchParams({busca: termo, pagina: '1'})
    }
    return (
        <div >
        <h1>Lista de Produtos</h1>
        <ul className={styles.productsList}>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        </ul>
        </div>
    )
}