import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <div className="d-flex mt-4 pt-4">
                <h1>Product List</h1>
                <div className="ms-auto">
                    <Button className="me-3 btn-light fw-bold border-dark shadow-lg">
                        <Link className="text-decoration-none text-dark" to='/add-products'> ADD</Link>
                    </Button>
                    <Button className="me-3 btn-light fw-bold border-dark shadow-lg">MASS DELETE</Button>
                </div>
            </div><hr />
            <Row className="gx-4">
                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;