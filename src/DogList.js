import { Link } from "react-router-dom";

/** Show a list of dogs, including the dog image and the link to the specific dog
 * 
 * props: 
 *  - dogs: an array of dogs' object
 * 
 * state: none
 * 
 * Routes -> DogList
 * 
 */

function DogList({ dogs }) {

    return (
        <div>
            {dogs.map(dog => (
                <div key={dog.name}> 
                    <img
                        src={`/${dog.src}.jpg`}
                        alt={dog.name}
                        style={{ height: "100px", width: "100px", }}
                    />
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                </div>
            ))}
        </div>
    );
}

// index also works for key here
export default DogList;