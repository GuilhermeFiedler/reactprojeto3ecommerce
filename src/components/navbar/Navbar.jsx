import { NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import ButtonLogout from "../buttonLogout/ButtonLogout";
import ButtonTheme from "../buttonTheme/ButtonTheme";
import "./Navbar.css";
import useAuth from "../../hook/useAuth";
export default function Navbar() {
    const {user} = useAuth();
  return (
    <nav className="Navbar">
      <NavLink to="/" className="home">
        Home
      </NavLink>

      <NavLink to="/produtos">Produtos</NavLink>
      {!user && (
        <NavLink to="/login">
          <CiLogin />
        </NavLink>
      )}
      {user && <ButtonLogout />}
      <ButtonTheme />
      <NavLink to="/shoppingCart">
        <FaShoppingCart />
      </NavLink>
      {!user && (
        <NavLink to="/register" className="registerbtn">
          Cadastre-se
        </NavLink>
      )}
    </nav>
  );
}
