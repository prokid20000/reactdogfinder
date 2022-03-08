import { Link, useParams, Redirect } from "react-router-dom";


function DogDetails({dogs}) {
    const { name } = useParams();

    const currentDog = dogs.find( dog => dog.name === name);

    if(currentDog){
        return (
        <div>
            <img src ={`/${currentDog.src}.jpg`} alt = {currentDog.name} style={{height: "100px", width: "100px",}}/>
            <h1>It's name is: {currentDog.name}</h1>
            <h2>Age: {currentDog.age}</h2>
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