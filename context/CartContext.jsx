import { useState, createContext, useEffect } from "react";


export const cartContext = createContext()

export default function cartContextProvider(props)
{
    const [cart, setCart] = useState([])
    
    const addCart = (cartToAdd) =>
    {

    }
    return
    (
    <cartContext.Provider value={{cart, addCart}}>
        {props.children}
    </cartContext.Provider>
    )
}