/*
 * @version: 1.0.0
 * @Author: fl
 * @Date: 2020-06-11 09:31:19
 * @LastEditors: fl
 * @LastEditTime: 2020-06-12 08:58:17
 */

import * as types from '../constants/ActionTypes';

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products: products,
});

export const getAllProducts = () => (dispatch) => {
  fetch('./shop.json')
    .then((response) => response.json())
    .then((json) => dispatch(receiveProducts(json)))
    .then((res) => {
      console.log(res, 'res');
    });
};

export const inaddproduct = (productId) => ({
  type: types.ADD_PRODUCT,
  productId: productId,
});

export const decproduct = (productId) => ({
  type: types.DEC_PRODUCT,
  productId: productId,
});

export const deccount = (productId) => ({
  type: types.DEL_COUNT,
  product: productId,
});

export const clearproduct = () => ({
  type: types.CLEAR_PRODUCT,
});

export const addhistory = (order, id) => ({
  type: types.ADD_HISTORY,
  id: id,
  order: order,
});
