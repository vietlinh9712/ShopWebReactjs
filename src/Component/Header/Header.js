import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from "./Header-Menu";
import './Header.css'
import {SideNavContext} from "../sideNav/SideNav";
import {useSelector} from "react-redux";

function Header(props) {
    const [headerType,setHeaderType] = useState(true);
    const amountProductInCart = useSelector(state => state.Cart.listProduct.length);

    useEffect(()=>{
        window.addEventListener('scroll', OnScrollHandle);
    })

    const OnScrollHandle = () =>{
        setHeaderType(()=>{
            return window.scrollY <= 100;
        })
    }

    return(
        <div className={(headerType)?'wrap-header':'wrap-header background-white hide-header'}>
            <div className={'container'}>
                <div className={'header-middle row-flex flex-flow-header'}>
                    <div className={'row  wrap-content-header'}>
                        <div className={(headerType)?'col-md-12 wrap-header-1 hidden-sm hidden-xs':'col-md-3 wrap-header-1 hidden-sm hidden-xs'}>
                            <a href={'/'}>
                                <div className={(headerType)?'wrap-logo text-center':'wrap-logo width-100 text-left'}>
                                    <img src='./image/logo/your-logo.png'/>
                                </div>
                            </a>
                        </div>
                        <div className={(headerType)?'col-md-12 wrap-header-1 hidden-sm hidden-xs':'col-md-6 wrap-header-1 hidden-sm hidden-xs pt-3'}>
                            <HeaderMenu />
                        </div>
                        <div className={(headerType)?'icon-wrap col-md-12 wrap-header-1 hidden-sm hidden-xs wrap-all-icon':' col-md-3 wrap-header-1 hidden-sm hidden-xs wrap-all-icon'}>
                            <div className={'row-flex '}>
                                <a className={'wrap-icon-header'} href={'#'}>
                                    <img width={20} height={20} src={'./image/icon/user.png'}/>
                                </a>
                                <a className={'wrap-icon-header'} href={'#'}>
                                    <img width={20} height={20} src={'./image/icon/search.png'}/>
                                </a>
                                <SideNavContext.Consumer>
                                    {({openSideNav}) => {
                                        return(
                                            <a href={'#!'} onClick={openSideNav} className={'wrap-icon-header'}>
                                                <img width={20} height={20} src={'./image/icon/shopping-cart.png'}/>
                                                <span className={'amount-cart'}> {amountProductInCart}</span>
                                            </a>
                                        )
                                    }}
                                </SideNavContext.Consumer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;