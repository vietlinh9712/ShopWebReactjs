import React, {useEffect, useState} from "react";

export const CartContext = React.createContext(true);

export function CartProvider(props) {
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);

    const AddToCart = async (product) => {
        const indexProduct = await cart.findIndex((e)=>  e.id === product.id);//find  product available
        if(indexProduct === -1){
            setCart([...cart,{...product,amount: 1}]);
        }else {
            setCart([
                ...cart.slice(0,indexProduct),
                {...product,amount: cart[indexProduct].amount + 1},
                ...cart.slice(indexProduct+1)
            ])
        }

    }

    const RemoveToCart = async (productId) => {
        const newCart = await cart.filter((e) => {
            return e.id !== productId
        })
        setCart([...newCart]);
    }

    return (
        <CartContext.Provider value={{
            AddToCart: AddToCart,
            RemoveToCart: RemoveToCart,
            Cart: cart,
            Total: total
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

