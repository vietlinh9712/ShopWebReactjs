import React from "react";
import FormGroup from "reactstrap/es/FormGroup";
import OptionField from "./OptionField";

function SelectField(props) {
    const {
        field,option
    } = props
    const {name, value, onChange, onBlur} = field;
    console.log(option);

    return(
        <FormGroup>
            <select className={"form-control"} name={name}>
                {option.length && option.map((e) => {
                    return(
                        <OptionField
                            id = {e[name+"_id"]}
                            key={e[name+"_id"]}
                            content={e[name+"_name"]}
                        />
                    )
                })}
            </select>
        </FormGroup>
    )
}

export default SelectField;