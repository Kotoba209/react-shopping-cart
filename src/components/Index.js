/*
 * @version: 1.0.0
 * @Author: fl
 * @Date: 2020-06-11 16:10:08
 * @LastEditors: fl
 * @LastEditTime: 2020-06-12 10:40:42
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import { getVisibleProducts } from '../reducers/count';

function Index({ count }) {
  // console.log(count, '<-count->');
  return (
    <div className='container fl main-index'>
      <QueueAnim>
        {count.map((product) => (
          <div
            id={product.id}
            className='product-list fl'
            key={'a' + product.id}>
            <img src={require(`../images/${product.src}`)} alt='商品图片' />
            <p>{product.price}</p>
            <Link to={'/detail/' + product.id}>{product.name}</Link>
          </div>
        ))}
      </QueueAnim>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state, '<-state->');
  return {
    count: getVisibleProducts(state.count),
  };
};

Index.propTypes = {
  count: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.is,
      src: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      mashu: PropTypes.array.isRequired,
    }).isRequired
  ),
};

export default connect(mapStateToProps)(Index);
