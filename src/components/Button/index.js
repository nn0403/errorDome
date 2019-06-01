import React, { Component } from 'react';
import "./style.css";

class Button extends Component {
    render() {
        const { data } = this.props;
        const { onSubmit } = this.props;
        return (
            <div className="button">
                <a onClick={ onSubmit }>{ data.text }</a>
            </div>
        );
    }
}

export default Button;