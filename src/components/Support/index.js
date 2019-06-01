import React, { Component } from 'react';
import { Link } from "react-router-dom";
import service from '../../image/icon/客服.png';
import './style.css';

class Support extends Component {
    render() {
        const { data, productId } = this.props;
        return (
            <div className='Support'>
                <div className='Support__left'>
                    <img src = { service } alt = "" />
                    客服
                </div>
                {
                    this.SupportLink(data,productId )
                }
            </div>
        );
    }


    // link是否跳转函数
    SupportLink = (data, productId) => {
        if (data === 1 || data === 3) {
            return (
                <a className= 'Support__right SupportActive'>去支持</a>
            );
        } else {
            return (
                <Link to={  `/purchase/${productId}` } className='Support__right'>去支持</Link>
            );
        }
    }
}

export default Support;