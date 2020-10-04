import React, {useState} from "react";
import './WrapSlider.css'
import Slider from "./Slider";

function WrapSlider() {
    const [listTitle,setListTitle] = useState(['TEE','BAG','HOODIE'])


    return(
        <div className={'wrap-slider'}>
            <div className={'container'}>
                <div className={'heading-slider'}>
                    <div className={'col-lg-12'}>
                        <h6>FEATURED CATERGORIES</h6>
                    </div>
                    <div className={'col-lg-12'}>
                        <div className={'row'}>
                            <div className={'col-lg-4'}></div>
                            <div className={'col-lg-4 tab-title'}>
                                <ul className={'list-title'}>
                                    {listTitle.map((title) => {
                                        return (
                                            <li>
                                                <a className={'title-slider'} href={'/#'}><span>{title}</span></a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={'col-lg-4'}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Slider />
        </div>
    )
}

export default WrapSlider;