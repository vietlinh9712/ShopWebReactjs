import React, {useState} from "react";
import './Header-Menu.css'
import './DropdownHeader'
import DropdownHeader from "./DropdownHeader";

function HeaderMenu() {
    const [isToggle,setIsToggle] = useState(false);

    return(
        <div className={'wrap-header-menu'}>
            <div className={'col-lg-12'}>
                <div className={'wrap-menu'}>
                    <ul className={'list-mainmenu'}>
                        <li>
                            <a href={'/'}>Home</a>
                            <div className={'animate'}></div>
                        </li>
                        <li onMouseOver={() => setIsToggle(true)} onMouseLeave={() => setIsToggle(false)}>
                            <a href={'/'}>All Items
                                <div className={'dropdown-arrow'}>
                                    <img className={'arrow'} width={15} height={15} src={'./image/icon/down-arrow.png'}/>
                                </div>
                            </a>
                            <DropdownHeader isToggle={isToggle}/>
                            <div className={'animate'}></div>
                        </li>
                        <li>
                            <a href={'/'}>Size Chart</a>
                            <div className={'animate'}></div>
                        </li>
                        <li>
                            <a href={'/'}>Contact Us</a>
                            <div className={'animate'}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;