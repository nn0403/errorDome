import React, { Component } from 'react';
import Header from "../../components/Header";


const title = {
    title: "支 持"
};


class Purchase extends Component {
    render() {
        return (
            <div>
                <Header data = { title } onBack = { this.handleBack } grey />
                支持页面
            </div>
        );
    }

    handleBack = () => {
        this.props.history.goBack();
    }
}

export default Purchase;