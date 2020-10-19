import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FastField,Field, Form, Formik} from "formik";
import InputField from "./InputField";
import SelectField from "./SelectField";
import axios from "axios"

function FormInfoBuyer() {
    const [province,setProvince] = useState([]);
    const [district,setDistrict] = useState([]);
    const [ward,setWard] = useState([]);

    useEffect(() => {
        let url = "https://vapi.vnappmob.com/api/province/";
        const fetchProvince = (url) => {
            axios.get(url).then((result) => {
                setProvince(result.data.results);
            })
        }
        fetchProvince(url);
    },[])

    const HandelSelectDistrict = (id) => {
        if (id !== 0){
            let url = 'https://vapi.vnappmob.com/api/province/district/' + id;
            axios.get(url).then((result) => {
                setDistrict(result.data.results);
            })
        }
    }

    const HandelSelectWard = (id) => {
        if (id !== 0){
            let url = 'https://vapi.vnappmob.com/api/province/ward/' + id;
            axios.get(url).then((result) => {
                setWard(result.data.results);
            })
        }
    }

    return(
        <div className={'p-5'}>
            <div className={'title'}><h3>PARADOX</h3></div>
            <div  className={'Category mb-3'}><Link to="/Cart">Giỏ Hàng</Link> > Thông tin giao hàng</div>
            <div className={'mb-3'}><h4>Thông tin giao hàng </h4></div>
            <Formik initialValues={ {title:''} }>
                {formikProps => {
                    const {values, errors, touched} = formikProps;
                    return(
                        <Form >
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
                                    <Field
                                        as={'select'}
                                        name={'province'}
                                        title={'province'}
                                        component={SelectField}

                                        HandleSelect = {HandelSelectDistrict}
                                        option={province}
                                        first={"Chọn thành phố"}
                                    />
                                </div>
                                <div className={'pl-1 pr-1'} style={{width: "33.3333%"}}>
                                    <Field
                                        name={'district'}
                                        component={SelectField}

                                        HandleSelect = {HandelSelectWard}
                                        option={district}
                                        first={"Chọn tỉnh"}
                                    />
                                </div>
                                <div className={'pl-2'} style={{width: "33.3333%"}}>
                                    <Field
                                        name={'ward'}
                                        component={SelectField}

                                        HandleSelect={false}
                                        option={ward}
                                        first={"Chọn xã"}
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

export default FormInfoBuyer;