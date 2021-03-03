import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import PetForm from "./PetForm";

function NewPet() {
  const [state, setState] = useState({
    name: "",
    species: "",
    age: "",
    breed: "",
    color: "",
    likes: "",
    dislikes: "",
    picture: "",
    adopted: false,
  });

  const history = useHistory();

  // A função de atualização de state dos Hooks é destrutiva, ou seja, ela substitui o valor no state atual pelo valor recebido. Pra não perdermos o que já temos no nosso objeto de state, precisamos fazer o spread do state atual
  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;

    setState(stateBkp);
  }

  function handleCheckboxChange(event) {
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/pet", {
        ...state,
        age: Number(state.age),
      });
      console.log(response);

      history.push("/my-pets");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-2">
      <h1>New Pet</h1>
      <PetForm
        state={state}
        onChange={handleChange}
        onCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewPet;
