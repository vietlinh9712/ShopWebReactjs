import React from "react";
import './ItemCart.css'
import {Format} from "../../asset/convertNumber";
import {useDispatch} from "react-redux";
import {increaseAmount, reductionAmount, removeToCart} from "../../action/Cart.action";

function ItemCart(props) {

    const dispatch = useDispatch();
    return(
        <div className={'wrap-item-cart'}>
            <div className={'row'}>
                <div className={'img-item-cart col-lg-2'}>
                    <img src={props.img} />
                </div>
                <div className={'wrap-title-item-cart col-lg-3'}>
                    <div className={'title-item-cart'}>{props.name} ({props.color})</div>
                    <div className={'size-code'}>S / PRX0981</div>
                </div>
                <div className={'increase-reduction-btn col-lg-2 '}>
                    <form>
                        <button type={'button'} onClick={() => dispatch(reductionAmount(props.id)) } className={' button-reduction'}>-</button>
                        <input  type={'number'} className={'input-number'} value={props.amount} />
                        <button type={'button'} onClick={() => dispatch(increaseAmount(props.id)) } className={' button-increase'}>+</button>
                    </form>
                </div>
                <div className={'col-lg-2 price-item-cart-1'}>
                    <div className={''}>
                        {(props.isSale)?Format(props.newPrice):Format(props.price)}đ
                    </div>
                </div>
                <div className={'col-lg-3 wrap-total-money'}>
                    <div className={'total-price-item-cart'}>
                        <div className={'text-price-item-cart text-center'}>
                            Thành  tiền:
                        </div>
                        <div className={'total-price text-center'}>
                            {(props.isSale)?props.newPrice*props.amount:props.price*props.amount}
                        </div>
                        <a href={'#!'} onClick={() => {
                            dispatch(removeToCart(props.id))
                        }
                        } className={'remove-btn text-center'}>
                            <img src={'./image/icon/delete.png'} alt={'delete'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCart;