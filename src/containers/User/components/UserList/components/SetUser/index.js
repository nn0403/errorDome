import React, { Component } from 'react';
import right from '../../../../../../image/icon/右.png';
import phone from '../../../../../../image/icon/手机号码.png';
import password from '../../../../../../image/icon/密码(1).png';
import Authentication from '../../../../../../image/icon/实名认证.png';
import Button from '../../../../../../components/Button';
import './style.css';
import { actions as loginActions, isLogin } from "../../../../../../redux/modules/login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


const list = [
    {
        "title": '实名认证',
        "icon": Authentication,
        "right": right
    },
    {
        "title": '手机号码',
        "icon": phone,
        "right": right
    },
    {
        "title": '登录密码',
        "icon": password,
        "right": right
    },
];

const buttonText = {
    "text": "安全退出"
};


class SetUser extends Component {
    render() {
        return (
            <div>
            <div className='setUser'>
                <div className='setUser__top'>
                    <div className = "setUser__back" onClick = { this.handleBack }>
                        返回
                    </div>
                    <div className='setUser__topImg'>
                        <img src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1714622289,1313962120&fm=26&gp=0.jpg" alt = "" />
                    </div>
                    <span className='setUser__topSpan'>186****1234</span>
                </div>
                <div className='setUser__main'>
                    {
                        list.map((item, index) => {
                            return (
                                <a key = { index } href = ""  className='setUser__mainItem'>
                                    <div className='setUser__mainItem__left'>
                                        <img src = { item.icon } alt = "" />
                                        <span>{ item.title }</span>
                                    </div>
                                    <img src = { item.right }
                                         className='setUser__mainItem__right'
                                         alt = "" />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
                <Button data = { buttonText } onSubmit = { this.handleSubmit }/>
            </div>
        );
    }

    handleBack = () => {
        this.props.history.goBack();
    };


    handleSubmit = () => {
        return this.props.loginActions.logout();
    }
}

const mapStateToProps = (state, props) => {
    return {
        login: isLogin(state)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginActions: bindActionCreators(loginActions, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SetUser);