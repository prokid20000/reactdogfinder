import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import { useState } from 'react';
import axios from 'axios';
import Routes from "./Routes";



function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //if condition to control making request

  async function getDogs() {
    const response = await axios.get("http://localhost:5000/dogs");
    console.log(response.data);
    setDogs(response.data);
    setIsLoading(false);
  }

  if (isLoading){
    getDogs();
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
