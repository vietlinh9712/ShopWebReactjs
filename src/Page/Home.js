import React from 'react';
import Banner from "../Component/Banner/Banner";
import WrapSlider from '../Component/Slider/WrapSlider'
import CollectionList from "../Component/CollectionList/CollectionList";
import InputEmail from "../Component/InputEmail/InputEmail";
import Header from "../Component/Header/Header";
import Footer from "../Component/footer/Footer";

function Home() {

    return (
        <>
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
        </>
    );
}

export default Home;