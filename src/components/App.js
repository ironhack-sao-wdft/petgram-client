import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Timeline from "../routeComponents/Timeline";
import NavMenu from "./Navmenu";
import NewPet from "../routeComponents/pet/NewPet";
import EditPet from "../routeComponents/pet/EditPet";
import MyPets from "../routeComponents/pet/MyPets";
import PetDetail from "../routeComponents/pet/PetDetail";
import DeletePet from "../routeComponents/pet/DeletePet";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="vh-100">
        <Switch>
          <Route exact path="/new-pet" component={NewPet} />
          <Route exact path="/my-pets" component={MyPets} />
          <Route exact path="/" component={Timeline} />
          <Route path="/pet/edit/:id" component={EditPet} />
          <Route path="/pet/delete/:id" component={DeletePet} />
          <Route path="/pet/:id" component={PetDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
