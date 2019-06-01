import React, { Component } from 'react';
import logo from "../../image/logo/logo.jpg";
import "./style.css";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <div className="logoMain"><img src = { logo } alt = "" /></div>
                <div className="logoTitle">将进酒业</div>
            </div>
        );
    }
}

export default Logo;