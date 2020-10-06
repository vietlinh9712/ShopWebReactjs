import React from "react";
import './WrapSlider.css'

function ButtonSlider(props) {

    return(
        <div className={'btn-explore-more '+ props.bg} >
                <a href={'#'} className={'btn-more ' + props.color}>
                    <span className={'z-index2'}>{props.text}</span>
                </a>
        </div>
    )
}

export default ButtonSlider;