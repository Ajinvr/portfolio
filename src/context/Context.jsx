import { createContext, useState} from "react";

export const GenerateContext = createContext(null);

function ContextProvider({ children }) {
    const [theme, setTheme] = useState('light');
    

    return (
        <GenerateContext.Provider value={{ theme, setTheme}}>
            {children}
        </GenerateContext.Provider>
    );
}

export default ContextProvider;
