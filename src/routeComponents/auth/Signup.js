import { useState } from "react";
import { useHistory } from "react-router-dom";

import TextInput from "../../components/TextInput";
import api from "../../apis/petgram-api";

function Signup() {
  const [state, setState] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/signup", state);

      console.log(response);

      history.push("/login");
    } catch (err) {
      console.error(err.response);

      if (err.response.data.errors) {
        setErrors({ ...err.response.data.errors });
      }
    }
  }

  console.log(errors);
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Your Name"
          name="name"
          type="text"
          id="signupFormName"
          value={state.name}
          onChange={handleChange}
          error={errors.name}
        />

        <TextInput
          label="Your E-mail"
          name="email"
          type="email"
          id="signupFormEmail"
          value={state.email}
          onChange={handleChange}
          error={errors.email}
        />

        <TextInput
          label="Your Password"
          name="password"
          type="password"
          id="signupFormPassword"
          value={state.password}
          onChange={handleChange}
          hint="Password must be at least 8 characters long, must include at least one uppercase letter, one lowercase letter, one number and one special character"
          error={errors.password}
        />

        <button type="submit" className="btn btn-primary">
          Signup!
        </button>
      </form>
    </div>
  );
}

export default Signup;
