import {useState, createContext} from "react";

const ThemeContext = createContext();

function ThemeContextProvider(props){

    const [darkMode, setDarkMode] = useState(false);

    const darkThemeSettings = {
        darkMode: 'black',
        lightMode: 'white'
    }

    const handleClick = () =>{
        setDarkMode(!darkMode);
    }

    return(
        <ThemeContext.Provider value={{
            darkMode,
            setDarkMode,
            darkThemeSettings,
            handleClick,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}



export {ThemeContext, ThemeContextProvider};