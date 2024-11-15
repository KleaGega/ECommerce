import  { createContext } from "react";
import { ThemeContextType } from "../interfaces/Theme";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
