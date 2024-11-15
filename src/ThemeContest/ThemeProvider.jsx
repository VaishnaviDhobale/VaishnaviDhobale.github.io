import { createContext, useState } from "react";

export let Theme = createContext();

export default function ThemeProvider({children}){
    let [theme,setTheme] = useState(false);
    return <Theme.Provider value = {{theme,setTheme}}>{children}</Theme.Provider>
}
