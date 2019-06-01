import React, { Component } from 'react';
import Header from "../../components/Header";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import RegisterBottom from './components/RegisterBottom';
import check from "../../image/icon/验证码 .png"
import phone from "../../image/icon/手机.png"
import password from "../../image/icon/密码(1).png"

const title = {
    title: "注册"
};


const buttonText = {
  "text": "注 册"
};



class Register extends Component {
    render() {

        const inputData = [
            {
                "name": 'phone',
                "img": phone,
                "title": "手机",
                "type": "text",
                "text": "",
                "onChange": null
            },
            {
                "name": 'check',
                "img": check,
                "title": "验证码",
                "type": "text",
                "text": "",
                "onChange": null
            },
            {
                "name": 'password',
                "img": password,
                "title": "请输入密码",
                "type": "password",
                "text": '',
                "onChange": null
            },
            {
                "name": 'reconfirm',
                "img": password,
                "title": "请再次确认密码",
                "type": "password",
                "text": '',
                "onChange": null
            }
        ];


        return (
            <div>
                <Header data = { title } onBack = { this.handleBack } grey />
                <Logo/>
                <Input data = { inputData }/>
                <Button data = { buttonText } onSubmit = { this.handleSubmit }/>
                <RegisterBottom/>
            </div>
        );
    }


    handleBack = () => {
        this.props.history.goBack();
    };
}

export default Register;