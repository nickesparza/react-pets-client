import PetsIndex from "./pets/PetsIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
            <h1>Behold, the Pets</h1> 
			<PetsIndex/>
		</>
	)
}

export default Home
