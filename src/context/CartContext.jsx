import { useState, createContext, useEffect } from "react";


export const CartContext = createContext()

export default function CartContextProvider(props)
{
    const [cart, setCart] = useState([])
    
    const addCart = (cartToAdd) =>
    {

    }
    return
    (
    <CartContext.Provider value={{cart, addCart}}>
        {props.children}
    </CartContext.Provider>
    )
}
