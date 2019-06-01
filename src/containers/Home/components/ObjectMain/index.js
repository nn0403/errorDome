import React, { Component } from "react";
import { Link } from "react-router-dom";
import ObjectItem from "../ObjectItem"
import "./style.css"

const tabTitles = ["全部", "预告", "筹集", "售窅"];

class ObjectMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        };
    }

    render() {
        const { currentTab } = this.state;

        const { data } = this.props;
        return (
            <div className = "ObjectMain">
                <div className = "ObjectMain__menu">
                    { tabTitles.map((item, index) => {
                        return (
                            <div key = { index } className = "ObjectMain__tab"
                                 onClick = { this.handleClickTab.bind(this, index) }>
                <span
                    className = {
                        currentTab === index
                            ? "ObjectMain__title ObjectMain__title--active"
                            : "ObjectMain__title"
                    }
                >
                  { item }
                </span>
                            </div>
                        );
                    }) }
                </div>
                <div className = "ObjectMain__content">
                    { data && data.length > 0
                        ? this.renderOrderList(data, currentTab)
                        : this.renderEmpty() }
                </div>
            </div>
        );
    }

    // 判断返回不同状态的列表
    renderOrderList = (data, currentIndex) => {
        return data.map(item => {
            if (currentIndex ===0 ) {
                return (
                    <Link to = { `/detail/${ item.id }` } key = { item.id }>
                        <ObjectItem data = { item } />
                    </Link>
                )
            } else if (currentIndex === 1 ) {
                if (item.type === 1) {
                    return (
                        <Link to = { `/detail/${ item.id }` } key = { item.id }>
                            <ObjectItem data = { item } />
                        </Link>
                    )
                } else {
                    return false;
                }
            } else if (currentIndex === 2 ) {
                if (item.type === 2) {
                    return (
                        <Link to = { `/detail/${ item.id }` } key = { item.id }>
                            <ObjectItem data = { item } />
                        </Link>
                    )
                } else {
                    return false;
                }
            }
            else if (currentIndex === 3 ) {
                if (item.type === 3) {
                    return (
                        <Link to = { `/detail/${ item.id }` } key = { item.id }>
                            <ObjectItem data = { item } />
                        </Link>
                    )
                } else {
                    return false;
                }
            }
        })
    };

    renderEmpty = () => {
        return (
            <div className = "ObjectMain__empty">
                <div className = "ObjectMain__emptyIcon" />
                <div className = "ObjectMain__emptyText1">此栏目无相关信息</div>
                <div className = "ObjectMain__emptyText2">等待发行筹集</div>
            </div>
        )
    };

    handleClickTab = (index) => {
        this.setState({
            currentTab: index
        })
    }
}

export default ObjectMain;
