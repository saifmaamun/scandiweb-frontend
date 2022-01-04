import React from 'react';
import { Col, InputGroup } from 'react-bootstrap';

const Product = ({ product }) => {
    const { name, hints, img, price, _id } = product;
    
    return (
        <Col sm={3}>
            <div className="border">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <div className="border text-center p-2">
                <p>{_id}</p>
                <p>{name}</p>
                <p>${price}</p>
                <p>{hints}</p>
                </div>
            </div>
        </Col>
    );
};

export default Product;