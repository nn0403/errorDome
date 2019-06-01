import React, { Component } from "react";
import User from '../../../../image/icon/姓名.png';
import Number from '../../../../image/icon/剩余个数.png';
import "./style.css"
import './programmeStyle.css';

const tabTitles = ["项目详情", "支持方案", "支持者"];

class ObjectMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            span: 0
        }
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

                    { data
                        ? this.ChoiceItem(data)
                        : this.renderEmpty() }
                </div>
            </div>
        );
    }

    ChoiceItem = (data) => {
        if (this.state.currentTab === 0) {
            return this.introduceItem(data);
        } else if (this.state.currentTab === 1) {
            return this.programmeItem(data);
        } else if (this.state.currentTab === 2) {
            return this.peopleItem(data);
        }
    };

    // 项目介绍组件
    introduceItem = (data) => {
        return (
            <div>
                <div className = 'DetailMain__programmeImg'>
                    <img
                        src = { this.props.data.orderPicUrl }
                        alt = "" />
                </div>
                <div className = 'DetailMain__programmeText'>
                    { this.props.data.description }
                </div>
            </div>
        )
    };

    // 支持方案组件
    programmeItem = (data) => {
        return (
            <div>
                <div className = "detail__programmeDetail">
                    <div className = "detail__programmeDetailItem">
                        <span className = "detail__programmeDetailItem__top">￥{ this.props.data.money }</span>
                        <span className = "detail__programmeDetailItem__bottom">金额/份</span>
                    </div>
                    <div className = "detail__programmeDetailItem">
                        <span className = "detail__programmeDetailItem__top">{ this.props.data.Profit }%<span
                            className = 'small'>+浮动</span></span>
                        <span className = "detail__programmeDetailItem__bottom">预期年化收益</span>
                    </div>
                </div>
                <div className = "detail__programmeNumber">
                    <div className = "detail__programmeNumberItem">
                        <img src = { User } alt = "" />
                        <span>支持人数：{ this.props.data.Number }</span>
                    </div>
                    <div className = "detail__programmeNumberItem">
                        <img src = { Number } alt = "" />
                        <span>剩余份数：{ this.Surplus() }</span>
                    </div>
                </div>
                <div className = "detail__programmeMessage">感谢您的支持！您支持总额为{ this.handleMoney(this.props.data.money, this.state.span) }元，预期收益为{ this.handleMoney(this.props.data.money, this.state.span) * 0.01 * this.props.data.Profit  }元</div>
                <div className = "detail__programmeCalculation">
                    <span className = 'reduce' onClick = { this.handleReduce }>-</span>
                    <span className = 'number'>{ this.state.span }</span>
                    <span className = 'add' onClick = { this.handleAdd }>+</span>
                </div>
                <div className = "detail__programmeTag">预计回报发送时间： 项目到期清算结束后</div>
            </div>
        )
    };

    // 支持者组件
    peopleItem = (data) => {
        return (
            <div className = 'detail__people'>
                <div className = 'detail__peopleTitle'>
                    支持者（共34位）
                </div>
                {
                    this.props.data.user.map((item) => {
                       return (
                           <div className = 'detail__peopleItem' key={ item.id }>
                               <div className = 'detail__peopleItem__left'>
                                   <span className = 'detail__peopleItem__leftPhone'>{ item.phone }</span>
                                   <span className = 'detail__peopleItem__leftTime'>{ item.userTime }</span>
                               </div>
                               <span className = 'detail__peopleItem__right'>{ item.userMoney }元</span>
                           </div>
                       )
                    })
                }
            </div>
        )
    };

    renderEmpty = () => {
        return (
            <div className = "ObjectMain__empty">
                <div className = "ObjectMain__emptyIcon" />
                <div className = "ObjectMain__emptyText1">此栏目无相关信息</div>
                <div className = "ObjectMain__emptyText2">等待主家发布</div>
            </div>
        )
    };

    handleClickTab = (index) => {
        this.setState({
            currentTab: index
        })
    };

    // 计算剩余份数函数
    Surplus = () => {
         const number = Math.floor((this.props.data.targetAmount - this.props.data.currentAmount) / this.props.data.money - this.state.span);
         if (number > 0 ) {
             return number;
         } else {
             return 0;
         }
    };

    // 点击减号
    handleReduce = () => {
        if (this.state.span < 1) {
            return;
        }
        else {
            this.setState({
                span: this.state.span - 1
            });
        }
    };

    // 点击加号
    handleAdd = () => {
        if (this.Surplus() === 0 || this.props.data.type === 1  || this.props.data.type === 3) {
            return;
        }
        this.setState({
            span: this.state.span + 1
        });
    };

    // 计算购买金额
    handleMoney = (money, number) => {

        return money * number;
    }
}

export default ObjectMain;
