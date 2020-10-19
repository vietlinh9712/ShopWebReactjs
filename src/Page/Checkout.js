import React from 'react';
import FormInfoBuyer from "../Component/Checkout/FormInfoBuyer";

function Checkout() {

    return(
        <>
            <div className={'wrap-checkout'}>
                <div className={'container'}>
                    <div style={{display: "flex"}} className={'wrap-content mt-5'}>
                        <div style={{ width: "60%"}} className={'content-left text-left'}>
                            <FormInfoBuyer />
                        </div>
                        <div style={{ width: "40%"}} className={'content-right'}>
                            bbbbbbbbb
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;