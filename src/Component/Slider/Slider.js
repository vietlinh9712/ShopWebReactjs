import React, {useEffect, useState} from "react";
import './Slider.css'
import Item from "../Item/Item";

function Slider(props) {
    const [transformSlider,setTransformSlider] = useState(0);

    useEffect(() => {
        const slider = document.getElementById('slider'+props.index);
        slider.style.transform = "translateX("+transformSlider+"px)";
    })


    function onClickHandle(text) {
        if (text === 'next'){
            if (transformSlider > -1140) setTransformSlider(() => transformSlider - 285);
        }else if (text === 'back'){
            if (transformSlider < 0) setTransformSlider(() => transformSlider + 285);
        }
    }

    return(
        <div className={'container'}>
            <div className={'wrap-all'}>
                <a href={`#!`} onClick={() => onClickHandle('next')} id={'next-btn'} className={'set-btn next-button'}><img width={15} height={15} src={'./image/icon/next.png'} /></a>
                <a href={`#!`} onClick={() => onClickHandle('back')} id={'back-btn'} className={'set-btn pre-button'}><img width={15} height={15} src={'./image/icon/left-arrow.png'} /></a>
                <div className={'view-slider'}>
                    <div id={'slider'+props.index} className={'slider slider-content'}>
                        {props.listProduct.map((product,index) => {
                            if (!props.hasListType){
                                return <Item
                                    id={product.id}
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
                                    slider={true}
                                />
                            }
                            if (product.type === props.typeProduct && props.hasListType){
                                return <Item
                                    id={product.id}
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
                                    slider={true}
                                />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;