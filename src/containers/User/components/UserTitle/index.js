import React, { Component } from 'react';
import { Link } from "react-router-dom";
import right from '../../../../image/icon/右.png';
import './style.css';


class UserTitle extends Component {
    render() {
        return (
            <div className = 'userTitle'>
                <div className = 'userTitle__top'>
                    <div className = 'userTitle__title'>我的</div>
                    <Link
                        to = { `/setUser` }
                        className = 'UserTitle__main'>
                        <div className = 'UserTitle__mainPic'>
                            <img
                                src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1714622289,1313962120&fm=26&gp=0.jpg"
                                alt = "" />
                        </div>
                        <div className = 'UserTitle__mainMsg'>
                            <div className = 'UserTitle__mainMsg__main'>
                                <span className = 'UserTitle__mainMsg__name'>123****5642</span>
                                <span className = 'UserTitle__mainMsg__state'>未实名认证</span>
                            </div>
                            <span className = 'UserTitle__mainRight'><img src = { right } alt = "" /></span>
                        </div>
                    </Link>
                    <div className='userTitle__topBottom'>
                        <div className='userTitle__topBottom__item'>
                            <span className='userTitle__topBottom__itemTop'>0.00</span>
                            <span className='userTitle__topBottom__itemBottom'>总资产(元)</span>
                        </div>
                        <div className='userTitle__topBottom__item'>
                            <span className='userTitle__topBottom__itemTop'>0.00</span>
                            <span className='userTitle__topBottom__itemBottom'>可用余额(元)</span>
                        </div>
                        <div className='userTitle__topBottom__item'>
                            <span className='userTitle__topBottom__itemTop userTitle__active'>0.00</span>
                            <span className='userTitle__topBottom__itemBottom'>已分红(元)</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserTitle;