import React from "react";
import './Footer.css'

function Footer() {

    return(
        <div className={'wrap-footer'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-3 col-sm-6 col-xs-12 wrap-content'}>
                        <div className={'title-footer'}>
                            ABOUT US
                        </div>
                        <div className={'content-footer'}>
                            We start every movement that you would be in love.
                        </div>
                    </div>
                    <div className={'col-md-3 col-sm-6 col-xs-12 wrap-content'}>
                        <div className={'title-footer'}>
                            KEEP UP WITH US
                        </div>
                        <div className={'content-footer'}>
                            <ul className={'list-content'}>
                                <li><span className={'title-li'}>Địa chỉ:</span> 20 Trường Sa, Phường 17, Quận Bình Thạnh, TP.HCM</li>
                                <li><span className={'title-li'}>Hotline:</span> 0902486571</li>
                                <li><span className={'title-li'}>Khiếu nại đơn hàng:</span> 0934154709</li>
                                <li><span className={'title-li'}>Mail:</span> paradoxworldwideofficial@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'col-md-3 col-sm-6 col-xs-12 wrap-content'}>
                        <div className={'title-footer'}>
                            FANPAGE
                        </div>
                        <div className={'content-footer'}>
                            <div className="fb-page" data-href="https://www.facebook.com/TestChatbot-102796968213074"
                                 data-tabs="timeline" data-width="" data-height="250" data-small-header="false"
                                 data-adapt-container-width="true" data-hide-cover="    false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/TestChatbot-102796968213074"
                                            className="fb-xfbml-parse-ignore"><a
                                    href="https://www.facebook.com/TestChatbot-102796968213074">TestChatbot</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;