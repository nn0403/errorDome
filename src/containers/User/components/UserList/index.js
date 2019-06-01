import React, { Component } from 'react';
import right from "../../../../image/icon/右.png";
import { Link } from 'react-router-dom';
import './style.css';



const displayList = [
    {
        "title": "众筹记录",
        "item": "/records"
    },
    {
        "title": "资金明细",
        "item": "/detailed"
    },
    {
        "title": "关于我们",
        "item": '/aboutMe'
    },
    {
        "title": "联系我们",
        "item": '/contactMe'
    },
    {
        "title": "新手引导",
        "item": '/guide'
    },
];


class UserList extends Component {
    render() {
        return (
            <div className='UserList'>
                <div className='UserList__main'>
                    {
                        displayList.map((item, index) => {
                            return (
                                <Link to={ `${ item.item }` } key={index} className='UserList__mainItem'>
                                    { item.title }
                                    <img src = { right } alt = "" />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default UserList;