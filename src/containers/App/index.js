import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ErrorToast from "../../components/ErrorToast";
import { actions as appActions, getError } from "../../redux/modules/app";
import Home from '../Home'
import ProductDetail from '../ProductDetail';
import Login from '../Login';
import Register from '../Register';
import Retrieve from '../Retrieve';
import PrivateRoute from '../PrivateRoute';
import User from '../User';
import Purchase from '../Purchase';

import AboutMe from '../User/components/UserList/components/AboutMe';
import ContactMe from '../User/components/UserList/components/ContactMe';
import Detailed from '../User/components/UserList/components/Detailed';
import Guide from '../User/components/UserList/components/Guide';
import Records from '../User/components/UserList/components/Records';
import SetUser from '../User/components/UserList/components/SetUser';

class App extends Component {
    render() {
        const {
            error,
            appActions: { clearError }
        } = this.props;
        return (
            <div className = "App">
                <Router>
                    <Switch>
                        <Route path = "/detail/:id" component = { ProductDetail } />
                        <PrivateRoute path = "/purchase" component = { Purchase } />
                        <PrivateRoute path = "/user" component = { User } />
                        <PrivateRoute path = "/aboutMe" component = { AboutMe } />
                        <PrivateRoute path = "/contactMe" component = { ContactMe } />
                        <PrivateRoute path = "/detailed" component = { Detailed } />
                        <PrivateRoute path = "/guide" component = { Guide } />
                        <PrivateRoute path = "/records" component = { Records } />
                        <PrivateRoute path = "/setUser" component = { SetUser } />
                        <Route path = "/login" component = { Login } />
                        <Route path = "/register" component = { Register } />
                        <Route path = "/retrieve" component = { Retrieve } />
                        <Route path = "/" component = { Home } />
                    </Switch>
                </Router>
                { error ? <ErrorToast msg = { error } clearError = { clearError } /> : null }
            </div>
        );
    }
}

// window.onbeforeunload = function (e) {
//     // 在这里做你想做的事，JUST DO IT ！！！
//     localStorage.removeItem('username');
//     localStorage.removeItem('login');
// };

const mapStateToProps = (state, props) => {
    return {
        error: getError(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
