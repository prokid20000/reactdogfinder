import { Link } from "react-router-dom";

function DogList({ dogs }) {

    return (
        <div>
            {dogs.map(dog => (
                <div key={dog.name}>
                    <img src={dog.src} alt={dog.name} />
                    <Link to={`/dogs/${dog}`}>{dog.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default DogList;