import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {
    const links = dogs.map(dog => (
        <NavLink exact to={`/dogs/${dog.name}`} >
            {dog.name}
        </NavLink>
    ));

    return (
        <nav className="NavBar">
            <NavLink exact to="/dogs">
                DogList
            </NavLink>
            {links}
        </nav>
    );
}

export default NavBar;