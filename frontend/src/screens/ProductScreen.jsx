import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
// import axios from 'axios';
import { useGetProductQuery } from '../slices/productApiSlice';

const ProductScreen = () => {
  // renaming id
  const { id: productId } = useParams();

  const { data: product, isLoading, error } = useGetProductQuery(productId);

  return (
    <>
      {isLoading ? (
       <Loader /> 
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message >
      ) : (
        <>
          <Link className="btn btn-light my-3" to="/">
            <Button>Go Back</Button>
          </Link>
          <Row>
            <Col md={5}>
              <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    values={product.rating}
                    reviews={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description:{product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock >= 0
                          ? 'In Stock'
                          : 'Out of Stock'}{' '}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup>

                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
