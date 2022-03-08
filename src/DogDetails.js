import { Link, useParams, Redirect } from "react-router-dom";


function DogDetails({dogs}) {
    const { name } = useParams();

    const currentDog = dogs.find( dog => dog.name === name);

    if(currentDog){
        return (<div>
            <img src = {currentDog.src} alt = {currentDog.name} />
            <h1>{currentDog.name}</h1>
            <h2>{currentDog.age}</h2>
            <ul>
                {currentDog.facts.map((fact, i) => (
                <li key ={i}>
                    {fact}
                </li>
                ))}
            </ul>
            <Link to="/dogs">Go back</Link>
        </div>)
    }
    
    return <Redirect to="/dogs" />;

}

export default DogDetails;