import React from "react";
import './Slider.css'
import Item from "../Item/Item";
import {Product} from '../../asset/dataProduct';

function Slider() {

    return(
        <div className={'container'}>
            <div className={'wrap-all'}>
                <div className={'view-slider'}>
                    <div className={'slider-content'}>
                        {Product.map((product,index) => {
                            return <Item
                                key={index}
                                name={product.name}
                                color={product.color}
                                isSale={product.isSale}
                                price={product.price}
                                type={product.type}
                                salePercent={product.salePercent}
                                newPrice={product.newPrice}
                                img1={product.img1}
                                img2={product.img2}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;