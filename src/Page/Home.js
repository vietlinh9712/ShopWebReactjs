import React from 'react';
import Header from '../Component/Header/Header'
import Banner from "../Component/Banner/Banner";
import WrapSlider from '../Component/Slider/WrapSlider'
import CollectionList from "../Component/CollectionList/CollectionList";
import InputEmail from "../Component/InputEmail/InputEmail";
import Footer from "../Component/footer/Footer";
import {SideNavProvider} from "../Component/sideNav/SideNav";
import {CartProvider} from "../Context/Cart";

function Home() {

    return (
        <>
            <CartProvider>
                <SideNavProvider>
                    <Header />
                    <Banner />
                    <WrapSlider
                        title={'FEATURED CATERGORIES'}
                        hasListType={true}
                        index={1}
                        lineBottom={true}
                    />
                    <WrapSlider
                        title={'NEW ARRIVAL'}
                        hasListType={false}
                        index={2}
                        lineBottom={false}
                    />
                    <CollectionList />
                    <InputEmail />
                    <Footer />
                </SideNavProvider>
            </CartProvider>
        </>
    );
}

export default Home;