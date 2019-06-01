import React, { Component } from "react";
import Header from "../../components/Header";
import Detail from './components/Detail';
import DetailMain from './components/DetailMain';
import Support from "../../components/Support";
import { actions as detailActions, getProduct } from "../../redux/modules/detail";
import './style.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


const title = {
    title: "产品详情"
};

class ProductDetail extends Component {
    render() {
        const { product } = this.props;
        if (product === null) {
            return null;
        } else {
            return (
                <div className="ProductDetail__main">
                    <Header data = { title } onBack = { this.handleBack } grey />
                    <Detail data = { product }/>
                    <DetailMain data = { product }/>
                    <Support data = { product.type } productId = { product.id }/>
                </div>
            );
        }
    }

    componentDidMount() {
            const productId = this.props.match.params.id;
            this.props.detailActions.loadProductDetail(productId);
    }

    handleBack = () => {
        this.props.history.goBack();
    };
}

const mapStateTpProps = (state, props) => {
    // 获取当前页面id的值
    const productId = props.match.params.id;
    return {
        product: getProduct(state, productId)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        detailActions: bindActionCreators(detailActions, dispatch)
    }
};


export default connect(mapStateTpProps, mapDispatchToProps)(ProductDetail);
