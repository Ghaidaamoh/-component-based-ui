import {Form , Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function FormComponent(props) {
    return (
        <>
            <Form onSubmit={props.formfun} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label> UserName </Form.Label>
                    <Form.Control name="userName" type="UserName" placeholder="UserName" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
export default FormComponent;