import React from "react";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";

function InputField(props) {
    const {
        field,form,
        type,label,placeholder,disabled
    } = props
    const {name, value, onChange, onBlur} = field

    return(
        <FormGroup>
            {label && <Label for={name}>{label}</Label> }
            <Input
                id={name}
                type={type}
                {...field}

                disabled={disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    )
}

export default InputField;