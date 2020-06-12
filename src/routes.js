/*
 * @version: 1.0.0
 * @Author: fl
 * @Date: 2020-06-11 16:33:36
 * @LastEditors: fl
 * @LastEditTime: 2020-06-11 16:35:28
 */
import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/Main';
import Index from './components/index';

export default (
  <Route component={App}>
    <Route path='/' component={Index} />
  </Route>
);
