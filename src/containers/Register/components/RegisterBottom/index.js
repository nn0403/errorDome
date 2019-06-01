import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

class RegisterBottom extends Component {
    render() {
        return (
            <div className='RegisterBottom'>
                已有账号马上
                <Link className='RegisterBottom__right' to={`/login`}>登录</Link>
            </div>
        );
    }
}

export default RegisterBottom;