import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {

    render() {
        const { homeActive, my } = this.props.data;
        return (
            <div className = "Footer">
                <div className='FooterMain'>
                    <Link to="/home" className = "Footer__left">
                        <img src = { homeActive } alt = "" />
                        <span className = "Footer__homeTitle">首页</span>
                    </Link>
                    <Link to="/login" className = "Footer__right">
                        <img src = { my } alt = "" />
                        <span className = "Footer__myTitle">我的</span>
                    </Link>
                </div>

            </div>
        )
    };
}

export default Footer;