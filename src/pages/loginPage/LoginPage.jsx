import Button from "../../components/Button/Button";
import useAuth from "../../hook/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css"
import { useNavigate } from "react-router-dom";

export function LoginPage(){
    const {login, loading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

    try{
        await login(email, password);
        alert("Login bem sucedido");
        navigate("/home")
    } catch(err){
        alert("Não foi possivel fazer login, verifique seus dados.");
    }
    }
    return (
        <>
        <form className="LoginPage" onSubmit={handleSubmit}>
            <div> 
            <label>Email</label>
                <input type="text" placeholder="Digite seu email"  onChange={(e) => setEmail(e.target.value)} required value={email}/>
            <label>Senha</label>
            <input type="password" placeholder="Digite a senha" onChange={(e) => setPassword(e.target.value)} required value={password} />
        
            <Button type="login">{loading ? "Logging in..." : "Login"}</Button>
        </div>    
        </form>
        <div>
            <Link className="register-link" to="/home">Cancelar</Link>
        </div>
        </>

    )
}