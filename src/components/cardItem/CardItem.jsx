import Button from "../Button/Button";
import styles from "./CardItem.module.css"
import { CgAdd } from "react-icons/cg";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function CardItem({product}){
    return(
        <div className={styles.cardBody}>
            <h3 className="card-item-title">{product.title}</h3>
            <div className="cardImg">
                <img src={product.img} alt={product.title}/>
            </div>
            <div className="card-price">
                RS${product.price}
            </div>
            <div className="card-buttons">
                <Button type="removeItem"><IoIosRemoveCircleOutline/></Button>
                <Button type="addItem"><CgAdd /></Button>
                
            </div>
        </div>
    )
}

