import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import { useState } from 'react';
import axios from 'axios';
import Routes from "./Routes";


/** Show the Nav bar and the dog lists
 * 
 * prop: none
 * state:
 *  - dogs: an array of object, the object looks like =>
 *                    {
                          "name": "Perry",
                          "age": 4,
                          "src": "perry",
                          "facts": [
                            "Perry loves all humans.",
                            "Perry demolishes all snacks.",
                            "Perry hates the rain."
                          ]
                      }
    - isLoading: true/false, controlling making axios request
 * App -> (NavBar, Routes)
 */
function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const response = await axios.get("http://localhost:5000/dogs");
    console.log(response.data);
    setDogs(response.data);
    setIsLoading(false);
  }

  console.log("*******************");

  if (isLoading) {
    getDogs();
    return <h1>Loading...</h1>;
  }


  return (
    <div>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
