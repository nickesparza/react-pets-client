// useNavigate is a hooke that allows navigation to a specific page
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import {getOnePet, updatePet} from '../../api/pets'
import messages from '../shared/AutoDismissAlert/messages'
import { Container, Card, Button } from 'react-bootstrap'
import EditPetModal from './EditPetModal'

// get pet id from parameters
// make request to the api using that id
// display results inside this component

const ShowPet = (props) => {
    // set state for pet component
    const [pet, setPet] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    // don't need to add an error in state because navigate takes the user away from the page immediately
    // destructure to get id from the parameters using useParams
    const { id } = useParams()
    const { msgAlert, user } = props
    console.log('this is the user', user)
    console.log('this is the pet in showPet', pet)
    // use navigate returns a function
    // use that function to redirect user to a different page by passing a page in as an argument
    const navigate = useNavigate()

    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Pet',
                    message: messages.getPetsFailure,
                    variant: 'danger'
                })
                navigate('/')
            })
    // eslint-disable-next-line
    }, [updated])

    if (!pet) {
        return <LoadingScreen/>
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{pet.fullTitle}</Card.Header>
                    <Card.Body>
                        <div><small>Age: {pet.age}</small></div>
                        <div><small>Type: {pet.type}</small></div>
                        <div><small>Adoptable: {pet.adoptable ? 'Yes' : 'No'}</small></div>
                    </Card.Body>
                    <Card.Footer>
                        {
                            pet.owner && user && pet.owner._id === user._id
                            ?
                            <Button onClick={() => setEditModalShow(true)} className='m-2' variant="info">
                                Edit {pet.name}
                            </Button>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <EditPetModal 
                pet={pet} 
                user={user}
                show={editModalShow} 
                updatePet={updatePet}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)} 
            />
        </>
    )
}

export default ShowPet