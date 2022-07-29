import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PetForm = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [age, setAge] = useState('')
    const [adoptable, setAdoptable] = useState(false)

    return (
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Create a Pet</h3>
                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label htmlFor='name'>Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            name='name'
                            value={name}
                            placeholder='Enter name'
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='type'>
                        <Form.Label htmlFor='type'>Type</Form.Label>
                        <Form.Control
                            required
                            name='type'
                            value={type}
                            type='text'
                            placeholder='Enter type'
                            onChange={e => setType(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='age'>
                        <Form.Label htmlFor='age'>Age</Form.Label>
                        <Form.Control
                            required
                            name='age'
                            value={age}
                            type='text'
                            placeholder='Enter age'
                            onChange={e => setAge(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='adoptable'>
                        <Form.Label htmlFor='adoptable'>Are they Adoptable?</Form.Label>
                        <Form.Check
                            required
                            name='adoptable'
                            type='checkbox'
                            checked={adoptable}
                            // placeholder='Enter age'
                            onChange={e => setAdoptable(!adoptable)}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default PetForm