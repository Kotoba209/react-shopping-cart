/*
 * @Descripttion:
 * @version:
 * @@Company: zhihua
 * @Author: fl
 * @Date: 2020-06-11 15:10:27
 * @LastEditors: fl
 * @LastEditTime: 2020-06-11 15:12:12
 */
import { combineReducers } from 'redux';

import count from './count';
import cart from './cart';
import history from './history';

const counts = combineReducers({
  count,
  cart,
  history,
});

export default counts;
