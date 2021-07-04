import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Avatar, List, Empty } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './Cart.css';

const Component = class Cart extends React.Component {
  render () {
    return (
      <Row className="cart__container">
        <Col span={18} offset={3}>
          {
            this.props.cart.products && this.props.cart.products.length > 0
              ? <List
                  itemLayout="horizontal"
                  dataSource={this.props.cart.products}
                  renderItem={product => (
                    <List.Item
                      actions={[<a key="list-loadmore-edit" onClick={() => this.props.removeProduct(product)}><DeleteOutlined /></a>]}
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={product.thumbnail} />}
                        title={product.title}
                        description={product.description}
                      />
                    </List.Item>
                  )}
                />
              : <Empty description="Your cart is empty" />
          }
        </Col>
      </Row>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart
})

const mapDispatch = (dispatch) => ({
  removeProduct: dispatch.cart.removeProduct,
})

export default connect(
  mapState,
  mapDispatch
)(Component);