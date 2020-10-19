import React, {createContext, useEffect, useState} from "react";
import './SideNav.css'
import ButtonSlider from "../Slider/ButtonSlider";
import {Format} from "../../asset/convertNumber";
import {useSelector} from "react-redux";
import {removeToCart} from "../../action/Cart.action";

export const SideNavContext = React.createContext(true);

export function SideNavProvider(props) {
    const [translateNav,setTranslate] = useState(480);
    const [translateChildren,setTranslateChildren] = useState(0);
    const [bg,setBg] = useState(false);

    const cartProduct = useSelector(state => state.Cart.listProduct);
    const cartTotal = useSelector(state => state.Cart.total)

    useEffect(() => {
        if(translateChildren === 0){
            document.getElementById('children-web')
                .style.transform = 'none';
        }else {
            document.getElementById('children-web')
                .style.transform = 'translateX('+translateChildren+'px)';;
        }
        document.getElementById('sideNav1')
            .style.transform = 'translateX('+translateNav+'px)';
    })

    const openSideNav = () => {
        setTranslate( 0);
        setTranslateChildren(-480);
        setBg(true);
    }

    const closeSideNav = () => {
        setTranslate(480);
        setTranslateChildren(0);
        setBg(false);
    }

    return(
        <SideNavContext.Provider value={{
            openSideNav: openSideNav,
            closeSideNav:  closeSideNav
        }}>
            <div className={'wrap-side-nav'}>
                <div id={'children-web'} className={'children'}>
                    <div onClick={() => closeSideNav()} className={(bg)?'back-ground-black':''}> </div>
                    {props.children}
                </div>
                <div id={'sideNav1'} className={'side-nav'}>
                    <a href={'#!'} onClick={() => closeSideNav()} className={'close-btn'}><img src={'./image/icon/close-button.png'} width={15} height={15} /> </a>
                    <div className={'wrap-cart'}>
                        <div className={'title-cart'}>Giỏ Hàng</div>
                        {cartProduct.map((product,index) => {
                                return(
                                    <div key={index} className={'cart-item'}>
                                        <div className={'img-item'}>
                                            <img src={product.img1} alt="/products/advanture-time-tee-black" />
                                        </div>
                                        <div className={'title-item'}>
                                            <h4 className={'title'}>{product.name} ({product.color})</h4>
                                            <div className={'size-code'}>S/S123</div>
                                            <div className={'amount-price'}>
                                                <div className={'amount'}>{product.amount}</div>
                                                <div className={'price'}>{(product.isSale)?Format(product.newPrice):Format(product.price)} đ</div>
                                            </div>
                                        </div>
                                        <a href={'#!'} onClick={() => removeToCart(product)} className={'close-icon-item'}>
                                            <img src={'./image/icon/close-button.png'} width={10} height={10}/>
                                        </a>
                                    </div>
                                )
                            })}
                            <div className={'cart-total'}>
                                <div className={'total'}>
                                    <span className={'text-total'}>Tổng Tiền : </span>
                                    <span className={'number-total'}>{Format(cartTotal)}</span>
                                </div>
                                <div className={'wrap-btn'}>
                                    <ButtonSlider
                                        bg={'bg-black'}
                                        color={'color-white'}
                                        text={'XEM GIỎ HÀNG'}
                                        link={'/Cart'}
                                    />
                                    <ButtonSlider
                                        bg={'bg-black'}
                                        color={'color-white'}
                                        text={'THANH TOÁN'}
                                        link={'/Cart/Checkout'}
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </SideNavContext.Provider>
    )
}
