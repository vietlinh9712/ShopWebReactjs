import React from "react";
import CollectionBox from "./CollectionBox";
import './CollectionBox.css'

function CollectionList(props) {
    return(
        <div className={'wrap-collection-list'}>
            <div className={'row'}>
                <div className={'col-md-4 col-sm-6 col-xs-12 padding-row'}>
                    <CollectionBox
                        linkimg={'https://file.hstatic.net/1000361985/file/infull_6a9917891c8a48b9afac73ed4a12c3f5.gif'}
                        titleTop={'Collection'}
                        titleBot={'OVER-PRINTED LINE'}
                    />
                </div>
                <div className={'col-md-4 col-sm-6 col-xs-12 padding-row'}>
                    <CollectionBox
                        linkimg={'https://file.hstatic.net/1000361985/file/share_fb_home_6c925bc4bca54f1f80e96f1da333d1ee.jpeg'}
                        titleTop={'Collection'}
                        titleBot={'BACKPACK'}
                    />
                </div>
                <div className={'col-md-4 col-sm-6 col-xs-12 padding-row'}>
                    <CollectionBox
                        linkimg={'https://file.hstatic.net/1000361985/file/sm__2033_e6ae843a5803444ab74a9208999e038f.jpg'}
                        titleTop={'Collection'}
                        titleBot={'JACKET'}
                    />
                </div>
            </div>
        </div>
    )
}

export default CollectionList;