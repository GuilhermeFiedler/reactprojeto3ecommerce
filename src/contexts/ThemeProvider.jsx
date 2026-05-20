import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext"

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme')  || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}