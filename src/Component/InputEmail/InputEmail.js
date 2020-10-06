import React from "react";
import './inputEmail.css'

function InputEmail() {

    return(
        <div className={'wrap-input-email'}>
            <div className={'container'}>
                <div className={'wrap-content'}>
                    <h2 className={'title-top'}>JOIN OUR COMMUNITY</h2>
                    <h6 className={'subtitle'}>Enter your email to get notification</h6>
                    <form className={'form-group set-form-input'}>
                        <input required="" type="email"  placeholder="Nhập email của bạn" name="contact[email]"
                               aria-label="Email Address" className="inputNew form-control"/>
                           <button className={'btn-submit btn'} type={'submit'}>Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InputEmail;