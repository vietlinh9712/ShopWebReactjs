import React, {useState} from "react";
import './Item.css'
import {Format} from '../../asset/convertNumber';
import {SideNavContext} from "../sideNav/SideNav";

import {
    Link
} from "react-router-dom";
import {addToCart} from "../../action/Cart.action";
import {useDispatch} from "react-redux";

function Item(props) {
    const dispatch = useDispatch();

    return(
        <div className={(props.slider)?'wrap-item mar-15':'wrap-item'}>
            <div>
                <div className={'wrap-img'}>
                    <div className={'wrap-img-1'}>
                        <img
                            data-src={props.img1}
                            className=" ls-is-cached lazyloaded img1" alt=" ADJACENT TEE (Black) "
                            src={props.img1}/>
                    </div>
                    <div className={'wrap-img-2'}>
                        <img
                            data-src={props.img2}
                            className=" ls-is-cached lazyloaded img2" alt=" ADJACENT TEE (Black) "
                            src={props.img2}/>
                    </div>
                    <div className={'wrap-btn-hover'}>
                                <SideNavContext.Consumer>
                                    {({openSideNav}) =>
                                        <>
                                        <Link onClick={() => dispatch(addToCart(props))} to={'/Cart'} className={'btn set-button-buy'}>
                                            Mua Ngay
                                        </Link>
                                        <button onClick={() => {
                                            openSideNav();
                                            const action = addToCart(props);
                                            dispatch(action);
                                        }}
                                                className={'btn set-button-buy'}>
                                            Thêm Vào Giỏ
                                        </button>
                                        </>}
                                </SideNavContext.Consumer>
                    </div>
                    <div className={(props.isSale)?'product-sale text-center':'product-sale display-none'}>
                        <span>-{props.salePercent}%</span>
                    </div>
                </div>
                <div className={'item-detail'}>
                    <div className={'item-name text-center' }>{props.name} {'('+props.color+')'}</div>
                    <div className={'price text-center' }>
                        <div className={(props.isSale)?'new-price price-unit color-red':'new-price price-unit'}>
                            {(props.isSale) ? Format(props.newPrice):Format(props.price)}<div className={'price-unit'}>₫</div>
                        </div>
                        <div className={(props.isSale)?'old-price price-unit':'display-none'}>
                            {Format(props.price)}<div className={'price-unit'}>₫</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;