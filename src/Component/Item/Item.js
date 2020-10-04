import React, {useState} from "react";
import './Item.css'
import {Format} from '../../asset/convertNumber';

function Item(props) {

    return(
        <div className={'wrap-item'}>
            <a href={'/#'}>
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
                            <button className={'btn set-button-buy'}>
                                Mua Ngay
                            </button>
                            <button className={'btn set-button-buy'}>
                                Thêm Vào Giỏ
                            </button>
                        </div>
                    {() => {
                        console.log(props.isSale)
                        if(props.isSale){
                        return(
                            <div className={'product-sale'}>
                                <span>-{props.salePercent}%</span>
                            </div>
                        )
                    }}}
                </div>
                <div className={'item-detail'}>
                    <div className={'item-name'}>{props.name} {'('+props.color+')'}</div>
                    <div className={'price'}>{Format(props.price)}<div className={'price-unit'}>₫</div></div>
                </div>
            </a>
        </div>
    )
}

export default Item;