import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './style.css';

const Component = class Cart extends React.Component {
  render () {
    return (
      <Link to="/cart">
        <Badge count={this.props.cart.products.length}>
          <ShoppingCartOutlined style={{ fontSize: '30px' }} />
        </Badge>
      </Link>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart
})

export default connect(
  mapState
)(Component);