import React from "react";
import ItemCart from "./ItemCart";
import './MainCart.css';
import ButtonSlider from "../Slider/ButtonSlider";
import {useSelector} from "react-redux";
import {Format} from "../../asset/convertNumber";

function MainCart() {
    const Cart = useSelector(state => state.Cart.listProduct);
    const totalNumber = useSelector(state => state.Cart.total)

    return(
        <div className={'wrap-main-cart'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-9 col-md-12'}>
                        <h2 className={'text-center mt-3 mb-3'}>Giỏ Hàng Của Bạn</h2>
                        <div className={(Cart.length)?'cart-box':'display-none'}>
                            <div className={'text-left mb-3'}>Bạn đang sản phẩm có {Cart.length} trong giỏ hàng</div>
                            {Cart.map((e) => {
                                return(
                                    <ItemCart
                                        name={e.name}
                                        isSale={e.isSale}
                                        price={e.price}
                                        newPrice={e.newPrice}
                                        img={e.img1}
                                        color={e.color}
                                        key={e.id}
                                        amount={e.amount}
                                        id={e.id}
                                    />
                                )
                            })}
                            <div className={'wrap-node'}>
                                <div className={'node-title'}>GHI CHÚ ĐƠN HÀNG</div>
                                <textarea className={'set-text-area'}> </textarea>
                            </div>
                        </div>
                        <div className={(Cart.length)? 'display-none' : ''}>
                            <div className={'text-center'}>Giỏ hàng của bạn đang trống</div>
                            <div className={'text-center pt-3'}>
                                <ButtonSlider
                                    text={'Tiếp tục mua hàng'}
                                    bg={'bg-black'}
                                    color={'color-white'}
                                    link={'/'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={' col-lg-3 col-md-12'}>
                        <div className={' wrap-total'}>
                            <div className={'fixed'}>
                                <div className={'total-text-title'}>Thông tin đơn hàng</div>
                                <div className={'total-money'}>
                                    <div className={'total-text'}>Tổng tiền</div>
                                    <div className={'total-number'}>{Format(totalNumber)}<span>VND</span></div>
                                </div>
                                <div className={'total-subtext'}>
                                    Bạn có thể nhập mã giảm giá ở trang thanh toán
                                </div>
                                <ButtonSlider
                                    bg={'bg-black'}
                                    color={'color-white'}
                                    text={'Thanh Toán'}
                                    link={'/'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCart;