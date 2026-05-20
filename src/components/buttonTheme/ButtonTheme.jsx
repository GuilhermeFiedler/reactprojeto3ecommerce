import Button from "../Button/Button";
import { useTheme } from "../../hook/useTheme";

export default function ButtonTheme(){
     
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
        </Button>

    )
}
