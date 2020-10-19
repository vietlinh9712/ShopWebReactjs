import React, {useEffect, useState} from "react";
import './WrapSlider.css'
import Slider from "./Slider";
import ButtonSlider from "./ButtonSlider";
import fireDB from "../../firebase"

function WrapSlider(props) {
    const [listTitle] = useState(['TEE','BAG','HOODIE']);
    const [typeProduct,setTypeProduct] = useState('TEE');
    const [listProduct,setListProduct] = useState([]);


    useEffect(() => {
        fireDB.child('listProduct').on('value',data => {
            if (!(data.val() === null)){
                if (data.val().length > 1){
                    let product = [];
                    for(let e of data.val()){
                        if (e.type === typeProduct){
                            product.push(e);
                            if (product.length > 8){
                                break;
                            }
                        }
                    }
                    setListProduct([...product]);
                }
            }
        });
    },[typeProduct])

    return(
        <div className={(props.lineBottom)?'wrap-slider line-bottom':'wrap-slider'}>
            <div className={'container'}>
                <div className={'heading-slider'}>
                    <div className={'col-lg-12 pb-3 text-center'}>
                        <span className={(props.hasListType)? 'mb-3 title-small':'mb-3 title-big'}>{props.title}</span>
                    </div>
                    <div className={(props.hasListType)?'col-lg-12':'display-none'}>
                        <div className={'row'}>
                            <div className={'col-lg-4'}> </div>
                            <div className={'col-lg-4 tab-title'}>
                                <ul className={'list-title'}>
                                    {listTitle.map((title,index) => {
                                        return (
                                            <li className={'type-title'} key={index}>
                                                <a className={'title-slider'} onClick={() => setTypeProduct(title)} href={`#!`}><span>{title}</span></a>
                                                <div className={(typeProduct === title)?'underline-title width-100':'underline-title'}> </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={'col-lg-4'}> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Slider
                hasListType={props.hasListType}
                typeProduct={typeProduct}
                index={props.index}
                listProduct = {listProduct}
            />
            <div className={'row'}>
                <div className={'col-lg-12 text-center'}>
                    <ButtonSlider
                        text={'EXPLORE MORE'}
                        bg={'bg-black'}
                        color={'color-white'}
                    />
                </div>
            </div>
        </div>
    )
}

export default WrapSlider;