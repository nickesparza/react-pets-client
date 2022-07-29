// useNavigate is a hooke that allows navigation to a specific page
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import {getOnePet} from '../../api/pets'
import messages from '../shared/AutoDismissAlert/messages'
import { Container, Card } from 'react-bootstrap'

// get pet id from parameters
// make request to the api using that id
// display results inside this component

const ShowPet = (props) => {
    // set state for pet component
    const [pet, setPet] = useState(null)
    // don't need to add an error in state because navigate takes the user away from the page immediately
    // destructure to get id from the parameters using useParams
    const {id} = useParams()
    const { msgAlert } = props
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
    }, [])

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
                </Card>
            </Container>
        </>
    )
}

export default ShowPet