/*
 * @version: 1.0.0
 * @Author: fl
 * @Date: 2020-06-12 16:03:40
 * @LastEditTime: 2020-06-12 17:26:22
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../reducers/count';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import * as TodoActions from '../actions';
import { Modal } from 'antd';

class Destination extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    const { cart, dispatch } = this.props;
    console.log(cart, '<-cart4566->');
    const order = cart.addIds.reduce((obj, num) => {
      console.log(obj, '<-obj->');
      console.log(num, '<-num->');
      obj[num] = cart.quantityId[num];
      return obj;
    }, {});
    dispatch(TodoActions.addhistory(order, new Date().getTime()));
    dispatch(TodoActions.clearproduct());
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { cart, count } = this.props;
    console.log(cart, '<-cart->');
    console.log(count, '<-count->');
    const carts = cart.addIds.map((id) => getProduct(count, id));
    //   console.log(carts, '<-carts->');
    return (
      <div className='cart-list fl'>
        <div className='cart-list-title'>
          <Row>
            <Col span={8}>商品信息</Col>
            <Col span={4}></Col>
            <Col span={4}>单价</Col>
            <Col span={4}>数量</Col>
            <Col span={4}>金额</Col>
          </Row>
        </div>
        <QueueAnim type={['right', 'left']}>
          {carts.map((product) => {
            return (
              <div
                id={product.id}
                className='cart-list-li'
                key={'a' + product.id}>
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
                      <Link to={`/detail/${product.id}`}>{product.name}</Link>
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className='text'>￥{product.price}</div>
                  </Col>
                  <Col span={4}>
                    <div className='text'>{cart.quantityId[product.id]}</div>
                  </Col>
                  <Col span={4}>
                    <div className='text'>
                      ￥{cart.quantityId[product.id] * product.price}
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </QueueAnim>
        <div className='total'>
          <div onClick={this.clearproduct} className='fl total-clear'>
            清空
          </div>
          <div onClick={this.showModal} className='fr total-all'>
            去结算
          </div>
          <div className='fr total-font'>
            <span className='total-symbol'>&nbsp;￥</span>
            {cart.addIds.reduce((sum, productId) => {
              return (
                sum +
                count.byId[productId]['price'] * cart.quantityId[productId]
              );
            }, 0)}
          </div>
        </div>
        <Modal
          title='提示语'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <h5>确认购买?</h5>
          <p>（购买后请到购买记录查看）</p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    cart: state.cart,
  };
};

// Destination.propTypes = {
//   count: PropTypes.object,
//   cart: PropTypes.object,
// };

export default connect(mapStateToProps)(Destination);

// export default function Destination() {
//   return <div></div>;
// }
