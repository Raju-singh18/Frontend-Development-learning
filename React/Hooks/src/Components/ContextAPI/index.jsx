
import { createContext, useContext } from "react";

// step => 1
export const BioContext = createContext();
// ! createContext returns a Context component, not a variable

// step => 2
export const BioProvider = ({children}) => {
const myName = "Raju Singh";
const myAge = 23;

console.log(children);

return <BioContext.Provider value={{myName, myAge}}>
{children}
</BioContext.Provider>
}
 

// ! cutsom Hooks
export const useBioContext = () => {
    const context = useContext(BioContext);
  return   context;
}
