import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../style/Form.scss'
function FormComponent(props) {
    return (
        <>
            <Form onSubmit={props.formfun} >
                <Form.Group id='btn' className="mb-3" >
                    <Form.Label>URL</Form.Label>
                    <Form.Control id="inputText" name="email" type="text" placeholder="Enter link" />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Go!
                </Button>
                <br/>
            </Form>
            <ButtonGroup aria-label="Basic example">
                    <Button className='btn2' variant="secondary">Get</Button>
                    <Button className='btn2' variant="secondary">Post</Button>
                    <Button className='btn2' variant="secondary">Delete</Button>
                    <Button className='btn2' variant="secondary">Put</Button>
                </ButtonGroup>

        </>
    );
}
export default FormComponent;