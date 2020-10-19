import React from "react";
import './WrapSlider.css';
import './ButtonSlider.css';
import {Link, BrowserRouter} from 'react-router-dom'

function ButtonSlider(props) {

    return(
        <BrowserRouter>
            <div className={'btn-explore-more '+ props.bg} >
                <a href={props.link} className={'btn-more ' + props.color}>
                    <span className={'z-index2'}>{props.text}</span>
                </a>
            </div>
        </BrowserRouter>
    )
}

export default ButtonSlider;