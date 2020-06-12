/*
 * @Descripttion:
 * @version:
 * @@Company: zhihua
 * @Author: fl
 * @Date: 2020-06-11 15:06:52
 * @LastEditors: fl
 * @LastEditTime: 2020-06-11 15:09:09
 */

import { ADD_HISTORY } from '../constants/ActionTypes';

const history = (state = {}, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        [action.id]: action.order,
      };
    default:
      return state;
  }
};

export default history;
