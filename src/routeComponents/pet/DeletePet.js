import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function DeletePet() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function deletePet() {
      try {
        const response = await axios.delete(`http://localhost:4000/pet/${id}`);

        console.log(response);

        history.push("/my-pets");
      } catch (err) {
        console.error(err);
      }
    }
    deletePet();
  }, [id, history]);

  return <div>Deleting...</div>;
}

export default DeletePet;
