import PetForm from "../shared/PetForm"
import { createPet } from "../../api/pets"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import messages from "../shared/AutoDismissAlert/messages"

const CreatePet = (props) => {
    console.log('these are the props in CreatePet', props)
    const { msgAlert, user } = props
    const [pet, setPet] = useState({
        name: '',
        type: '',
        age: '',
        adoptable: false
    })

    const navigate = useNavigate()

    console.log('this is pet in CreatePet', pet)

    const handleChange = (e) => {
        setPet(prevPet => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            console.log('this is the input type', e.target.type)

            // this condition handles age and converting it to a number
            if (e.target.type === 'number') {
                // this looks at the input type of the field and changing it from default (string) to a number
                updatedValue = parseInt(e.target.value)
            }

            // this condition handles the checkbox and changing it to true/false
            if (updatedName === 'adoptable' && e.target.checked) {
                updatedValue = true
            } else if (updatedName ==='adoptable' && !e.target.checked) {
                updatedValue = false
            }

            const updatedPet = {
                [updatedName]: updatedValue
            }
            return {
                ...prevPet,
                ...updatedPet
            }
        })
    }

    // add a handleSubmit function here to make an API request and handle the response
    const handleSubmit = (e) => {
        e.preventDefault()
        createPet(user, pet)
            // if creation is successful, navigate to the show page and send a message to the user
            .then(res => { navigate(`/pets/${res.data.pet.id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Success!',
                    message: messages.createPetSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: messages.createPetFailure,
                    variant: 'danger'
                })
            })
    }

    return (
        <PetForm pet={pet} heading='Add a New Pet' handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
}

export default CreatePet