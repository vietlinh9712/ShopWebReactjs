import React, {Component, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FastField, Form, Formik} from "formik";
import InputField from "./InputField";
import SelectField from "./SelectField";
import axios from "axios"

class FormInfoBuyer extends Component {
    // const [district,setDistrict] = useState();
    //
    // useEffect(() => {
    //     let url = "https://vapi.vnappmob.com/api/province/";
    //     axios.get(url).then((result) => {
    //         setDistrict(result.data.results);
    //         console.log(result.data.results)
    //         return result.data.results
    //     })
    // },[])

    constructor(props) {
        super(props);
        this.state = {district: []}
    }

    componentWillMount() {

    }

    district = async () => {
        let url = "https://vapi.vnappmob.com/api/province/";
        let result = await axios.get(url)
        return result.data.results
    }

    render() {
        return (
            <div className={'p-5'}>
                <div className={'title'}><h3>PARADOX</h3></div>
                <div className={'Category mb-3'}><Link to="/Cart">Giỏ Hàng</Link> > Thông tin giao hàng</div>
                <div className={'mb-3'}><h4>Thông tin giao hàng </h4></div>
                <Formik initialValues={{title: ''}}>
                    {formikProps => {
                        const {values, errors, touched} = formikProps;
                        console.log({values, errors, touched});
                        return (
                            <Form>
                                <FastField
                                    name="name"
                                    component={InputField}
                                    type={'text'}

                                    lable={"Name"}
                                    placeholder={"Họ và Tên"}
                                />
                                <div className={'d-flex'}>
                                    <div style={{width: "60%"}}>
                                        <FastField
                                            name="Email"
                                            component={InputField}
                                            type={'email'}

                                            lable={"Email"}
                                            placeholder={"Email"}
                                        />
                                    </div>
                                    <div className={'pl-3'} style={{width: "40%"}}>
                                        <FastField
                                            name="phoneNumber"
                                            component={InputField}
                                            type={'number'}

                                            lable={"PhoneNumber"}
                                            placeholder={"Số điện thoại"}
                                        />
                                    </div>
                                </div>
                                <FastField
                                    name="address"
                                    component={InputField}
                                    type={'text'}

                                    lable={"Address"}
                                    placeholder={"Địa chỉ"}
                                />
                                <div className={'d-flex'}>
                                    <div className={'pr-2'} style={{width: "33.3333%"}}>
                                        <FastField
                                            name={'province'}
                                            title={'province'}
                                            component={SelectField}

                                        />
                                    </div>
                                    <div className={'pl-1 pr-1'} style={{width: "33.3333%"}}>
                                        <FastField
                                            name={'district'}
                                            component={SelectField}

                                            option={[1, 2]}
                                        />
                                    </div>
                                    <div className={'pl-2'} style={{width: "33.3333%"}}>
                                        <FastField
                                            name={'wards'}
                                            component={SelectField}

                                            option={[1, 2]}
                                        />
                                    </div>
                                </div>

                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    }
}

export default FormInfoBuyer;