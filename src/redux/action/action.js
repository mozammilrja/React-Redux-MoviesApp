import * as types from '../actionType/actionType';

export function moviesDetails(data){
    return {
        type: types.MOVIES_TRENDING,
        payload: data,
    };
}
export function productDetails(data){
    return {
        type: types.PRODUCTS,
        payload: data,
    };
}