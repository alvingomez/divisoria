import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,  
} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';


const ProductScreen = () => {
  const [product, setProduct] = useState([]);

  // renaming id
  const {id:productId} = useParams();  
   
  useEffect(() => {
    const fetchProduct = async() => {
      const {data} = await axios.get(`/api/products/${productId}`)
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
      setProduct(data);
    } 
    fetchProduct();
    //If the prodcutID changes we want the useEffect to run 
  }, [productId])  
  return (
    <>    
        <Link className="btn btn-light my-3" to='/'>
          <Button>
            Go Back
          </Button>
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
              <ListGroup.Item > 
                <Rating 
                  values={product.rating}
                  reviews={`${product.numReviews} reviews`}
                />                
              </ListGroup.Item>
              <ListGroup.Item >Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description:{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush"> 
                <Row>
                  <Col>Price</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>                
                <Row>
                  <Col>Status:</Col>
                  <Col>
                  <strong>{product.countInStock >= 0 ? 'In Stock' : 'Out of Stock'} </strong>
                  </Col>
                </Row>              
              </ListGroup>

              <ListGroup.Item>
                <Button
                  className='btn-block'
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
  )
}

export default ProductScreen
