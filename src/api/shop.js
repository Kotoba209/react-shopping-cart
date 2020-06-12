/*
 * @version: 1.0.0
 * @Author: fl
 * @Date: 2020-06-11 09:29:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 15:11:54
 */

/**
 * Created by Administrator on 2017/5/15.
 */
import _products from './shop.json';

const TIMEOUT = 100;

export default {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
