import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** Show Nav bar, which includes doglist, and all the specific dog's link
 * 
 * props:
 *  - dogs: an array of dogs' object
 * 
 * state: none
 * 
 * App -> NavBar 
 */

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