import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './Navbar';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [dogs, setDogs] = useState([]);


  async function getDogs() {
    const response = await axios.get("http://localhost:5000/dogs")
    setDogs(response.data)

  }

  return (
    <div>
      <BrowserRouter>
        <NavBar dogs ={dogs}/>
          <Route exact path="/dogs">
            <Dogs />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
