import { Link } from "react-router-dom";

function DogList({ dogs }) {

    return (
        <div>
            {dogs.map(dog => (
                <div key={dog.name}>
                    <img src ={`/${dog.src}.jpg`} alt = {dog.name} style={{height: "100px", width: "100px",}}/>
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default DogList;