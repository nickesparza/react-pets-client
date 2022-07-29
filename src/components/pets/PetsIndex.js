import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import Card from 'react-bootstrap/Card'
import { getAllPets } from '../../api/pets'
import { Link } from 'react-router-dom'

const PetsIndex = (props) => {
    const [pets, setPets] = useState(null)

    useEffect(() => {
        console.log('useEffect has run once on load')
        getAllPets()
            .then(res => setPets(res.data.pets))
            .catch(err => console.log(err))
    }, [])

    // if pets haven't been loaded yet, show a loading message
    if (!pets) {
        return <LoadingScreen/>
    } else if (pets.length === 0) {
        return <p>No pets here. Better add some.</p>
    }

    const allPets = pets.map((pet, index) => (
        <Card style={{width: '18rem'}}>
            <Card.Header>{ pet.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`pets/${pet.id}`}>View {pet.name}</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))
    
    return (
        <>
        {/* <h1>This is the pets index component.</h1> */}
        {allPets}
        </>
    )
}

export default PetsIndex