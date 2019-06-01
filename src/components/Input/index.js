import React, { Component } from 'react';
import './style.css';

class Input extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="input">
                {
                    data.map( (item, index) => {
                        return (
                            <div className='inputMain' key = { index }>
                                <img src = { item.img } alt = "" />
                                <input type = { item.type } name={ item.name }
                                       value={ item.text }
                                       onChange = { item.onChange }
                                       placeholder={ item.title }/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Input;