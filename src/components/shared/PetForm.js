import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

const PetForm = (props) => {
    // get the state of a pet from the container component from the props
    const { pet, heading, handleChange, handleSubmit } = props

    return (
        <Container className='justify-content-center'>
            <h1>{heading}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        name='name'
                        value={pet.name}
                        placeholder='Enter name'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='type'>Type</Form.Label>
                    <Form.Control
                        required
                        name='type'
                        value={pet.type}
                        type='text'
                        placeholder='Enter type'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='age'>Age</Form.Label>
                    <Form.Control
                        required
                        name='age'
                        value={pet.age}
                        type='number'
                        placeholder='Enter age'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='adoptable'>Are they Adoptable?</Form.Label>
                    <Form.Check
                        name='adoptable'
                        type='checkbox'
                        checked={pet.adoptable}
                        // placeholder='Enter age'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default PetForm