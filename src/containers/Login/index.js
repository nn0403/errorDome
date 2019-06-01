import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import LoginBottom from './components/LoginBottom';
import me from "../../image/icon/me.png"
import password from "../../image/icon/密码(1).png"
import { Redirect } from 'react-router-dom';
import { getPassword, getUsername, isLogin, actions as loginActions } from "../../redux/modules/login";

const title = {
    title: "登录"
};


const buttonText = {
  "text": "登 录"
};



class Login extends Component {
    render() {
        const inputData = [
            {
                "name": 'username',
                "img": me,
                "title": "请输入账号",
                "type": "text",
                "text": this.props.username,
                "onChange": this.handleChange
            },
            {
                "name": 'password',
                "img": password,
                "title": "请输入密码",
                "type": "password",
                "text": this.props.password,
                "onChange": this.handleChange
            }
        ];

        // 定位到来时的页面
        const { location: { state } } = this.props;
        if (this.props.login) {
            if (state && state.from) {
                return <Redirect to = { state.from }/>
            }
            return <Redirect to={`/user`}/>
        }
        return (
            <div>
                <Header data = { title } onBack = { this.handleBack } grey />
                <Logo/>
                <Input data = { inputData } />
                <Button data = { buttonText } onSubmit = { this.handleSubmit }/>
                <LoginBottom />
            </div>
        );
    }

    handleChange = (e) => {
        if (e.target.name === "username") {
            this.props.loginActions.setUsername(e.target.value);
        } else if (e.target.name === "password") {
            this.props.loginActions.setPassword(e.target.value);
        }
    };

    handleSubmit = () => {
        this.props.loginActions.login();
    };


    handleBack = () => {
        this.props.history.goBack();
    };
}

const mapStateToProps = (state, props) => {
    return {
        username: getUsername(state),
        password: getPassword(state),
        login: isLogin(state)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginActions: bindActionCreators(loginActions, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);