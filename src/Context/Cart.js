import React from "react";

export const CartContext = React.createContext(true);

export function CartProvider(props) {

    return (
        <CartContext.Provider value={{

        }}>
            {props.children}
        </CartContext.Provider>
    )
}

