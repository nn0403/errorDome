import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

class LoginBottom extends Component {
    render() {
        return (
            <div className='loginBottom'>
                <Link className='loginBottom__retrieve' to={`/retrieve`}>忘记密码？</Link>
                <Link className='loginBottom__register' to={`/register`}>注册</Link>
            </div>
        );
    }
}

export default LoginBottom;