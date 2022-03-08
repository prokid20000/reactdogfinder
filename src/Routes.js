import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Show a list of routes
 * 
 * props:
 *  - dogs: an array of dogs' object
 * 
 * state: none
 * 
 * App -> Routes -> (DogList, DogDetails)
 */

function Routes({dogs}) {
    return (
        <Switch>
            <Route exact path="/dogs" >
                <DogList dogs={dogs} />
            </Route>
            <Route exact path="/dogs/:name" >
                <DogDetails dogs= {dogs} /> 
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
}

export default Routes;