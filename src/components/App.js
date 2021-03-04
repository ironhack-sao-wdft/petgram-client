import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Timeline from "../routeComponents/Timeline";
import NavMenu from "./Navmenu";
import NewPet from "../routeComponents/pet/NewPet";
import EditPet from "../routeComponents/pet/EditPet";
import MyPets from "../routeComponents/pet/MyPets";
import PetDetail from "../routeComponents/pet/PetDetail";
import DeletePet from "../routeComponents/pet/DeletePet";
import Signup from "../routeComponents/auth/Signup";
import Login from "../routeComponents/auth/Login";

import PrivateRoute from "../components/PrivateRoute";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <NavMenu />
        <div className="vh-100">
          <Switch>
            <Route exact path="/new-pet" component={NewPet} />
            <PrivateRoute exact path="/my-pets" component={MyPets} />
            <Route exact path="/" component={Timeline} />
            <Route path="/pet/edit/:id" component={EditPet} />
            <Route path="/pet/delete/:id" component={DeletePet} />
            <Route path="/pet/:id" component={PetDetail} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
