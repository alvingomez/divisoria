import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../../../backend/data/products';
import Product from '../components/Products';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
