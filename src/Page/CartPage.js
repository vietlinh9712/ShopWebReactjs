import React from "react";
import Category from "../Component/Category/Category";
import MainCart from "../Component/MainCart/MainCart";
import Header from "../Component/Header/Header";
import Footer from "../Component/footer/Footer";

function CartPage(props) {

    return(
        <>
            <Header />
            <Category />
            <MainCart />
            <Footer />
        </>
        )
}

export default CartPage;