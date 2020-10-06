import React from "react";
import ButtonSlider from "../Slider/ButtonSlider";

function CollectionBox(props) {

    return(
        <div className={'wrap-collection-box'}>
            <div className={'set-bg-black'}> </div>
            <a className={'set-link-img'} href={'#'}>
                <img data-src={props.linkimg}
                     className={'set-link-img'} alt="Over-printed Line"
                     src={props.linkimg} />
            </a>
            <div className={'collection-title'}>
                <div className={'title-top'}>{props.titleTop}</div>
                <div className={'title-bot'}>{props.titleBot}</div>
            </div>
            <div className={'collection-button'}>
                <ButtonSlider
                    text={'See more'}
                    bg={'bg-white'}
                    color={'color-black'}
                />
            </div>
        </div>
    )
}

export default CollectionBox;