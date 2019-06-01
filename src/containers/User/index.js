import React, { Component } from 'react';
import Footer from "../../components/Footer";
import UserList from './components/UserList';
import UserTitle from './components/UserTitle';
import homeActive from "../../image/icon/首页.png";
import my from "../../image/icon/我的(1).png";





const footPic = {
    homeActive,
    my
};


class User extends Component {
    render() {
        return (
            <div>
                <UserTitle/>
                <UserList/>
                <Footer data = { footPic }/>
            </div>
        );
    }

}

export default User;