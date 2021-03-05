import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import api from "../../apis/petgram-api";
import { AuthContext } from "../../contexts/authContext";

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
  const authContext = useContext(AuthContext);

  // A função de atualização de state dos Hooks é destrutiva, ou seja, ela substitui o valor no state atual pelo valor recebido. Pra não perdermos o que já temos no nosso objeto de state, precisamos fazer o spread do state atual
  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      const stateBkp = { ...state };
      stateBkp[event.target.name] = event.target.value;

      setState(stateBkp);
    }
  }

  function handleCheckboxChange(event) {
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  }

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("picture", file);

      const response = await api.post("/upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const uploadImageUrl = await handleFileUpload(state.picture);

      const response = await api.post("/pet", {
        ...state,
        age: Number(state.age),
        picture: uploadImageUrl,
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
