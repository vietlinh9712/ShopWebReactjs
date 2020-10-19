import React from "react";
import FormGroup from "reactstrap/es/FormGroup";
import OptionField from "./OptionField";

function SelectField(props) {
    const {
        field,option,HandleSelect,first
    } = props
    const {name, value, onChange, onBlur} = field;
    console.log(option);

    return(
        <FormGroup>
            <select
                id={name}
                onChange = {() => {
                    if(HandleSelect !== false){
                        HandleSelect(document.getElementById(name).value)
                    }
                }}
                className={"form-control"}
                name={name}
            >
                <option value={0}>{first}</option>
                {option.length && option.map((e) => {
                    return(
                        <>
                            <OptionField
                                id = {e[name+"_id"]}
                                key= {e[name+"_id"]}
                                value = {e[name+"name"]}
                                content= {e[name+"_name"]}
                            />
                        </>
                    )
                })}
            </select>
        </FormGroup>
    )
}

export default SelectField;