/*
 * @version: 1.0.0
 * @Author: fl
 * @Date: 2020-06-12 16:50:52
 * @LastEditTime: 2020-06-12 17:19:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Plan = ({ count, history }) => {
  const getLocalTime = (nS) => {
    return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ');
  };
  const list = () => {
    let lis = [];
    for (let i in history) {
      let mlis = [];
      for (let j in history[i]) {
        let product = count.byId[j];
        mlis.push(
          <div id={product.id} className='cart-list-li' key={'a' + product.id}>
            <Row>
              <Col span={3}>
                <div className='img'>
                  <img
                    src={require(`../images/${product.src}`)}
                    alt='商品图片'
                  />
                </div>
              </Col>
              <Col span={9}>
                <div className='text'>
                  <Link to={`/detail/${product.src}`}>{product.name}</Link>
                </div>
              </Col>
              <Col span={4}>
                <div className='text'>￥{product.price}</div>
              </Col>
              <Col span={4}>
                <div className='text'>{history[i][j]}</div>
              </Col>
              <Col span={4}>
                <div className='text'>￥{history[i][j] * product.price}</div>
              </Col>
            </Row>
          </div>
        );
      }
      lis.push(
        <div key={'item' + i}>
          <p>{getLocalTime(i)}</p>
          {mlis}
        </div>
      );
    }
    return lis;
  };
  return <div className='plan fl'>{list()}</div>;
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    cart: state.cart,
    history: state.history,
  };
};

export default connect(mapStateToProps)(Plan);
