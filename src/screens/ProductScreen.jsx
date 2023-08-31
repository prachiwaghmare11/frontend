import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';
import { Link } from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap';
import Ratings from '../components/Ratings';
const ProductScreen = () => {

    const {id:productId} = useParams();
    const product = products.find((p)=>p._id==productId);
    console.log(product)
  return (
    <>
    <Link className='btn btn-light my-3' to="/"></Link>
    <Row>
        <Col md={5}>
            <Image src={product.image} fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Ratings value={product.rating} text={`${product.numReviews} reviews`}></Ratings>
                </ListGroup.Item>
                <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
                <ListGroup.Item>Description : {product.description}</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col><strong>${product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row>
                            <Col> Status:</Col>
                            <Col><strong> {product.countInStock > 0 ? "Available" :"Out of Stock"}</strong></Col>
                        </Row>
                  
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Button  className='btn-block' as={Link} to={`/cart/${product._id}`} disabled={product.countInStock===0} type="button" >Add To Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen