import React from "react";

function OptionField(props) {
    const {
        id,content
    } = props

    return(
        <option value={id}>
            {content}
        </option>
    )
}

export default OptionField;