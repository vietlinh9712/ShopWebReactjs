import React, {createContext, useEffect, useState} from "react";
import './SideNav.css'
import ButtonSlider from "../Slider/ButtonSlider";
import {Format} from "../../asset/convertNumber";
import {CartContext} from "../../Context/Cart";

export const SideNavContext = React.createContext(true);

export function SideNavProvider(props) {
    const [translateNav,setTranslate] = useState(480)
    const [translateChildren,setTranslateChildren] = useState(0)
    const [bg,setBg] = useState(false)

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
        console.log('close')
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
                        <CartContext.Consumer>
                            {({Cart,RemoveToCart,Total}) => {
                                return(
                                    Cart.map((product) => {
                                        return(
                                            <div className={'cart-item'}>
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
                                            </div>
                                        )
                                    })
                                )
                            }}
                        </CartContext.Consumer>
                        <CartContext.Consumer>
                            {({Total}) => {
                                return(
                                    <div className={'cart-total'}>
                                        <div className={'total'}>
                                            <span className={'text-total'}>Tổng Tiền : </span>
                                            <span className={'number-total'}>{Format(Total)}</span>
                                        </div>
                                        <div className={'wrap-btn'}>
                                            <ButtonSlider
                                                bg={'bg-black'}
                                                color={'color-white'}
                                                text={'XEM GIỎ HÀNG'}
                                            />
                                            <ButtonSlider
                                                bg={'bg-black'}
                                                color={'color-white'}
                                                text={'THANH TOÁN'}
                                            />
                                        </div>
                                    </div>
                                )
                            }}
                        </CartContext.Consumer>
                    </div>
                </div>
            </div>
        </SideNavContext.Provider>
    )
}
