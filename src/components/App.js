import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Timeline from "../routeComponents/Timeline";
import NavMenu from "./Navmenu";
import NewPet from "../routeComponents/pet/NewPet";
import MyPets from "../routeComponents/pet/MyPets";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="vh-100">
        <Route exact path="/new-pet" component={NewPet} />
        <Route exact path="/my-pets" component={MyPets} />
        <Route exact path="/" component={Timeline} />
      </div>
    </BrowserRouter>
  );
}

export default App;
