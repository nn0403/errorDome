import React, { Component } from 'react';
import Header from "../../components/Header";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import phone from "../../image/icon/手机.png";
import check from "../../image/icon/验证码 .png";

const title = {
    title: "修改密码"
};

const buttonText = {
  "text": "下一步"
};



class Retrieve extends Component {
    render() {

        const inputData = [
            {
                "name": 'phone',
                "img": phone,
                "title": "手机",
                "type": "text",
                "text": '',
                "onChange": null
            },
            {
                "name": 'check',
                "img": check,
                "title": "验证码",
                "type": "text",
                "text": '',
                "onChange": null
            },
        ];

        return (
            <div>
                <Header data = { title } onBack = { this.handleBack } grey />
                <Logo/>
                <Input data = { inputData }/>
                <Button data = { buttonText } onSubmit = { this.handleSubmit }/>
            </div>
        );
    }

    handleClick = () => {
        
    };

    handleBack = () => {
        this.props.history.goBack();
    };
}

export default Retrieve;