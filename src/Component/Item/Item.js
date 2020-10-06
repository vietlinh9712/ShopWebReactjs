import React, {useState} from "react";
import './Item.css'
import {Format} from '../../asset/convertNumber';
import {SideNavContext} from "../sideNav/SideNav";
import {CartContext} from "../../Context/Cart";

function Item(props) {

    return(
        <div className={(props.slider)?'wrap-item mar-15':'wrap-item'}>
            <a href={'#!'}>
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
                            <button  className={'btn set-button-buy'}>
                                Mua Ngay
                            </button>
                            <CartContext.Consumer>
                                {({AddToCart}) =>
                                    <SideNavContext.Consumer>
                                        {({openSideNav}) =>
                                            <button onClick={() => {
                                                openSideNav();
                                                AddToCart(props)
                                            }}
                                                    className={'btn set-button-buy'}>
                                                Thêm Vào Giỏ
                                            </button>}
                                    </SideNavContext.Consumer>
                                }
                            </CartContext.Consumer>

                        </div>
                        <div className={(props.isSale)?'product-sale':'product-sale display-none'}>
                            <span>-{props.salePercent}%</span>
                        </div>
                </div>
                <div className={'item-detail'}>
                    <div className={'item-name'}>{props.name} {'('+props.color+')'}</div>
                    <div className={'price'}>
                        <div className={(props.isSale)?'new-price price-unit color-red':'new-price price-unit'}>
                            {(props.isSale) ? Format(props.newPrice):Format(props.price)}<div className={'price-unit'}>₫</div>
                        </div>
                        <div className={(props.isSale)?'old-price price-unit':'display-none'}>
                            {Format(props.price)}<div className={'price-unit'}>₫</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Item;