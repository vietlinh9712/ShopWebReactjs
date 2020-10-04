import React from "react";
import './DropdownHeader.css'

function DropdownHeader(props) {

    return(
        <div className={'wrap-dropdown'}>
            <ul className={(props.isToggle) ?'dropdown-menu-header' : 'dropdown-menu-header set-height-0'}>
                <li className={'dropdown-item-header'}>
                    <a href={'/#'} className={'Dropdown-link'} title={'TEE'}><div className={(props.isToggle) ? 'border-top-2px' : ''}> </div>TEE</a>
                </li>
                <li className={'dropdown-item-header'}>
                    <a href={'/#'} className={'Dropdown-link'} title={'JACKET'}>JACKET</a>
                </li>
                <li className={'dropdown-item-header'}>
                    <a href={'/#'} className={'Dropdown-link'} title={'SHORT'}>SHORT</a>
                </li>
                <li className={'dropdown-item-header'}>
                    <a href={'/#'} className={'Dropdown-link'} title={'ACCESSORIES'}>ACCESSORIES</a>
                </li>
                <li className={'dropdown-item-header'}>
                    <a href={'/#'} className={'Dropdown-link'} title={'HOODIE'}>HOODIE</a>
                </li>
                <li className={'dropdown-item-header'}>
                    <a href={'/#'} className={'Dropdown-link'} title={'SWEATER'}>SWEATER</a>
                </li>
            </ul>
        </div>
    )
}

export default DropdownHeader;