import { combineReducers } from "redux"
import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";
import { schema, getProductDetail } from "./entities/products";

export const types = {
    // 获取详情数据
    FETCH_PRODUCT_DETAIL_REQUEST: "DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",
    FETCH_PRODUCT_DETAIL_SUCCESS: "DETAIL/FETCH_PRODUCT_DETAIL_SUCCESS",
    FETCH_PRODUCT_DETAIL_FAILURE: "DETAIL/FETCH_PRODUCT_DETAIL_FAILURE",
};

const initialState = {
    product: {
        isFetching: false,
        id: null
    }
};

export const actions = {
    loadProductDetail: id => {
        return (dispatch, getState) => {
            const product = getProductDetail(getState(), id);
            if (product) {
                return dispatch(fetchProductDetailSuccess(id));
            }
            const endpoint = url.getProductDetail(id);
            return dispatch(fetchProductDetail(endpoint, id));
        }
    }
};

const fetchProductDetailSuccess = (id) => ({
    type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
    id
});

// 获取商品详情
const fetchProductDetail = (endpoint, id) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_PRODUCT_DETAIL_REQUEST,
            types.FETCH_PRODUCT_DETAIL_SUCCESS,
            types.FETCH_PRODUCT_DETAIL_FAILURE,
        ],
        endpoint,
        schema
    },
    id
});

const product = (state = initialState.product, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT_DETAIL_REQUEST:
            return { ...state, isFetching: true };
        case types.FETCH_PRODUCT_DETAIL_SUCCESS:
            return { ...state, id: action.id, isFetching: false };
        case types.FETCH_PRODUCT_DETAIL_FAILURE:
            return { ...state, isFetching: false, id: null };
        default:
            return state;
    }
};

const reducer = combineReducers({
    product
});

export default reducer;

// selectors
export const getProduct = (state, id) => {
    return getProductDetail(state, id)
};