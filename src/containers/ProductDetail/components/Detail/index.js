import React, { Component } from 'react';
import "./style.css";



class detail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="detail__top">
                    <div className="detail__img">
                        <img src = { this.props.data.orderPicUrl } alt = "" />
                    </div>
                    <div className="detail__message">
                        <span className="detail__messageTag">{ this.props.data.statusText }</span>
                        <div className='detail__messageTitle'>
                            { this.props.data.title }
                        </div>
                        <div className="detail__messageMain">
                            <span className="detail__messageMain__moneyLeft">起投金额: </span>
                            <span className='detail__messageMain__moneyRight'>￥ { this.props.data.money }</span>
                            <div className='detail__messageMain__introduce'>{ this.props.data.msg }</div>
                        </div>
                    </div>
                </div>
                {  this.compare(this.props.data.type)  }
            </div>
        );
    }
    compare = (type) => {
        if (type === 1) {
            return this.noticeDetail();
        } else if (type === 2) {
            return this.RaiseDetail();
        } else if (type === 3) {
            return this.CompleteDetail();
        }
    };

    // 预告商品
    noticeDetail = () => {
        return(
            <div className='detail__bottom'>
                <div className='detail__bottomNotice__title'>{ this.props.data.time }</div>
                <div className='detail__bottomNotice__main'>
                    <div className='detail__bottomNotice__item'>
                        <span className='detail__bottomNotice__itemTitle'>￥{ this.props.data.targetAmount }</span>
                        <span className='detail__bottomNotice__itemBottom'>目标金额</span>
                    </div>
                    <div className='detail__bottomNotice__item'>
                        <span className='detail__bottomNotice__itemTitle'>{ this.props.data.endTime }</span>
                        <span className='detail__bottomNotice__itemBottom'>筹集结束日</span>
                    </div>
                    <div className='detail__bottomNotice__item'>
                        <span className='detail__bottomNotice__itemTitle'>{ this.props.data.currentAmount }</span>
                        <span className='detail__bottomNotice__itemBottom'>已筹集金额</span>
                    </div>
                    <div className='detail__bottomNotice__item'>
                        <span className='detail__bottomNotice__itemTitle'>{ this.props.data.Number }</span>
                        <span className='detail__bottomNotice__itemBottom'>支持人数</span>
                    </div>
                </div>
            </div>
        )
    };

    // 筹集商品
    RaiseDetail = () => {
        return(
            <div>
                <div className="detail__bottom">
                    <div className='detail__bottomBar'>
                        <div className="detail__bottomBar__left" style={{ width: this.BarLeftSetting() }} />
                        <div className="detail__bottomBar__right" style={{ width: this.BarRightSetting()  }}/>
                    </div>
                    <div className='detail__bottomMassage'>
                        <div className='detail__bottomMassage__item'>
                            <span className='detail__bottomMassage__itemTitle active'>{ this.props.data.Profit }</span>
                            <span className='detail__bottomMassage__itemMain'>预期年化收益</span>
                        </div>
                        <div className='detail__bottomMassage__item'>
                            <span className='detail__bottomMassage__itemTitle'>￥{ this.props.data.targetAmount }</span>
                            <span className='detail__bottomMassage__itemMain'>目标金额(万元)</span>
                        </div>
                        <div className='detail__bottomMassage__item'>
                            <span className='detail__bottomMassage__itemTitle'>{ this.props.data.projectTime }天</span>
                            <span className='detail__bottomMassage__itemMain'>项目期限</span>
                        </div>
                        <div className='detail__bottomMassage__item'>
                            <span className='detail__bottomMassage__itemTitle'>￥{ this.props.data.currentAmount }</span>
                            <span className='detail__bottomMassage__itemMain'>已筹集金额(万元)</span>
                        </div>
                        <div className='detail__bottomMassage__item'>
                            <span className='detail__bottomMassage__itemTitle'>{ this.props.data.Number }</span>
                            <span className='detail__bottomMassage__itemMain'>支持人数</span>
                        </div>
                        <div className='detail__bottomMassage__item'>
                            <span className='detail__bottomMassage__itemTitle'>{ this.props.data.endTime }</span>
                            <span className='detail__bottomMassage__itemMain'>筹集截止日期</span>
                        </div>
                    </div>
                    <div className='detail__agreement'>
                        <div className='detail__agreement__span'>协议范本>></div>
                        <div className='detail__agreement__title'>收益方式：到期一次性发放本金和收益</div>
                        <div className='detail__agreement__bottom'>收益起始日：筹集结束后开始计算收益</div>
                    </div>
                </div>
            </div>
        )
    };

    // 售罄商品
    CompleteDetail = () => {
        return(
            <div className='detail__bottom'>
                <div className='detail__bottomComplete__main'>
                    <div className='detail__bottomComplete__item'>
                        <span className='detail__bottomComplete__itemTitle'>{ this.props.data.Profit }</span>
                        <span className='detail__bottomComplete__itemBottom'>预期年化收益</span>
                    </div>
                    <div className='detail__bottomComplete__item'>
                        <span className='detail__bottomComplete__itemTitle'>￥{ this.props.data.currentAmount }</span>
                        <span className='detail__bottomComplete__itemBottom'>已筹集金额(万元)</span>
                    </div>
                    <div className='detail__bottomComplete__item'>
                        <span className='detail__bottomComplete__itemTitle'>{ this.props.data.Number }</span>
                        <span className='detail__bottomComplete__itemBottom'>支持人数</span>
                    </div>
                </div>
            </div>
        )
    };
    BarLeftSetting = () => {
        const Bar = Math.floor((this.props.data.currentAmount / this.props.data.targetAmount) * 100);
        return Bar + "%";
    };

    BarRightSetting = () => {
        return  (100 - Math.floor((this.props.data.currentAmount / this.props.data.targetAmount) * 100)) + "%";
    };
}

export default detail;