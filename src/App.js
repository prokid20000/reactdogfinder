import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './Navbar';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import axios from 'axios';
import Routes from "./Routes";



function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //if condition to control making request

  async function getDogs() {
    const response = await axios.get("http://localhost:5000/dogs");
    setDogs(response.data);
    setIsLoading(false);
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
