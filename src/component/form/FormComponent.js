import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import React, { useState } from 'react';
import './Form.scss'
function FormComponent(props) {
    const [method, setMethod] = useState(
        'get'
    );

    const handelApi = (e) => {
        e.preventDefault();
        let url = e.target.email.value
        let newobj= { method: method, url: url , reqBody: {} }
        props.apiData(newobj)
    }

    return (
        <>
            <Form onSubmit={handelApi} >
                <Form.Group id='btn' className="mb-3" >
                    <Form.Label>URL</Form.Label>
                    <Form.Control id="inputText" name="email" type="text" placeholder="Enter link" />

                </Form.Group>
                <Button name='myButton' variant="primary" type="submit">
                    {method}
                </Button>
                <br />
            </Form>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={() => setMethod('get')} className='btn2' variant="secondary">Get</Button>
                <Button onClick={() => setMethod('post')} className='btn2' variant="secondary">Post</Button>
                <Button onClick={() => setMethod('delete')} className='btn2' variant="secondary">Delete</Button>
                <Button onClick={() => setMethod('put')} className='btn2' variant="secondary">Put</Button>
            </ButtonGroup>

        </>
    );
}
export default FormComponent;