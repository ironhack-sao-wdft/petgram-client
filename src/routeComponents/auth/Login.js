import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";

import TextInput from "../../components/TextInput";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });

  const authContext = useContext(AuthContext);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", state);

      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Your E-mail"
          name="email"
          type="email"
          id="loginFormEmail"
          value={state.email}
          onChange={handleChange}
        />

        <TextInput
          label="Your Password"
          name="password"
          type="password"
          id="loginFormPassword"
          value={state.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Login!
        </button>
      </form>
    </div>
  );
}

export default Login;
