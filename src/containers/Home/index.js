import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Category from './components/Category';
import ObjectMain from './components/ObjectMain';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { actions as homeActions, getRaise, getSlider } from "../../redux/modules/home";
import homeActive from "../../image/icon/首页(1).png";
import my from "../../image/icon/me.png";


const footPic = {
    homeActive,
    my
};

const data = {
    title: "首 页"
};



class Home extends Component {
    render() {
        const { slider, raise } = this.props;
        return (
            <div>
                <Header data = { data }/>
                <Category data = { slider } />
                <ObjectMain data = { raise }/>
                <Footer data = { footPic }/>
            </div>
        );
    }
    componentDidMount() {
        this.props.homeActions.loadSlider();
        this.props.homeActions.loadRaiseList()
    }


}



const mapStateToProps = (state, props) => {
    return {
        slider: getSlider(state),
        raise: getRaise(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);