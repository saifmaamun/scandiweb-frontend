import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <div className="d-flex mt-4 pt-4">
                <h1>Product Add</h1>
                <div className="ms-auto">
                    <Button className="me-3 btn-light fw-bold border-dark shadow-lg">
                        <Link  className="text-decoration-none text-dark" to='/' > Save</Link>
                    </Button>
                    <Button className="me-3 btn-light fw-bold border-dark shadow-lg">Cancel</Button>
                </div>
            </div><hr />
            <Row>
                <Col sm={4} >
                    <form id='product_form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex '>
                            <h4>SKU</h4>
                            <input className="ms-auto"{...register("_id", { required: true })} />
                        </div><br />
                        <div className='d-flex '>
                            <h4>Name</h4>
                            <input className="ms-auto" {...register("name", { required: true })} />
                        </div><br />
                        <div className='d-flex'>
                            <h4>Price($)</h4>
                            <input type="number" className="ms-auto" {...register("price", { required: true })} />
                        </div><br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                    </form></Col>
            </Row>
            
        </Container>
    );
};

export default AddProducts;