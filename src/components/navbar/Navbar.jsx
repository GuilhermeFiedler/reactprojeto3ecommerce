import { NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import ButtonLogout from "../buttonLogout/ButtonLogout";
import ButtonTheme from "../buttonTheme/ButtonTheme";
export default function Navbar(){
    return( 
        <nav className="navbar">
            <NavLink to="/" className="home">
            Home
            </NavLink>

            <NavLink to="/produtos">Produtos</NavLink>
            <NavLink to="/login">
            <CiLogin />
            </NavLink>
            <ButtonLogout />
            <ButtonTheme />
            <NavLink to="/shoppingCart"><FaShoppingCart /></NavLink>
            <NavLink to="/register" className="registerbtn">Cadastre-se</NavLink>
        </nav>
    );
}