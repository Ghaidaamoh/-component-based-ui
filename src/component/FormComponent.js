import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function FormComponent(props) {
    return (
        <>
            <Form onSubmit={props.formfun} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>URL</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br/>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Get</Button>
                    <Button variant="secondary">Post</Button>
                    <Button variant="secondary">Delete</Button>
                    <Button variant="secondary">Put</Button>
                </ButtonGroup>

               
            </Form>
        </>
    );
}
export default FormComponent;