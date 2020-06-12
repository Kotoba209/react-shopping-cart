/*
 * @version: 1.0.0
 * @Author: fl
 * @Date: 2020-06-12 14:21:09
 * @LastEditTime: 2020-06-12 15:49:42
 */
import React from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import goods from '../api/shop.json';

const Detail = ({ match, dispatch, cart, count }) => {
  const handleradd = () => {
    dispatch(TodoActions.inaddproduct(match.params.topicId));
  };

  const handlerdec = () => {
    const id = match.params.topicId;
    dispatch(TodoActions.deccount(match.params.topicId));
    if (!cart.quantityId[id]) {
      dispatch(TodoActions.decproduct(match.params.topicId));
    }
  };
  const id = match.params.topicId;
  const product = count[id] || goods[id];
  let Addtoggle;
  if (!cart.quantityId[id] || cart.addIds.indexOf(id) === -1) {
    Addtoggle = (
      <span onClick={handleradd} className='buy'>
        加入购物车
      </span>
    );
  } else {
    Addtoggle = (
      <div className='detail-cart'>
        <span onClick={handleradd} className='toggle-add'>
          +
        </span>
        <div className='toggle-num'>
          {cart.quantityId[match.params.topicId]}
        </div>
        <span onClick={handlerdec} className='toggle-add'>
          -
        </span>
      </div>
    );
  }
  return (
    <div className='detail fl'>
      <div className='detail-header'>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='detail-content clear'>
        <div className='fl'>
          <img src={require(`../images/${product.src}`)} alt='商品图片' />
        </div>
        <div className='detail-right fl'>
          <div className='name'>{product.name}</div>
          <div className='mashu'>
            码数:
            {product.mashu.map((num) => (
              <span className='num' key={num + '1'}>
                {num}
              </span>
            ))}
          </div>
          <div className='toggle'>{Addtoggle}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, '<-state->');
  return {
    count: state.count.byId,
    cart: state.cart,
  };
};

Detail.propTypes = {
  count: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      //   price: PropTypes.nummber.isRequired,
      mashu: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps)(Detail);
