import React, { Component } from 'react';
import "./style.css"
import { actions as loginActions, isLogin } from "../../redux/modules/login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Header extends Component {
    render() {
        const { grey, title } = this.props.data;
        const backgroundColor = grey ? '#f0f0f0' : '#fff';
        return (
            <header className = "header" style = { { 'backgroundColor': backgroundColor } }>
                <div className = "header__back" onClick = { this.props.onBack }>
                    返回
                </div>
                <div className = "header__title">{ title }</div>
                {
                    this.cancellationItem()
                }
            </header>
        );
    }

    // 注销逻辑
    cancellationItem = () => {
        if (this.props.login) {
            return (
                <div className = "header__clear" onClick = { this.props.loginActions.logout }>注销</div>
            )
        } else {
            return <div className = "header__clear" style = { { color: "#fff" } }>注销</div>;
        }
    };
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);