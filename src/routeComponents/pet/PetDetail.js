import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PetDetail.css";

import ConfirmationModal from "../../components/ConfirmationModal";

function PetDetail(props) {
  const [petDetails, setPetDetails] = useState({
    name: "",
    species: "",
    age: 0,
    color: "",
    breed: "",
    likes: [],
    dislikes: [],
    picture: "",
    adopted: false,
    ownerId: "",
    taggedInPosts: [],
  });

  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchPetDetails() {
      const response = await axios.get(`http://localhost:4000/pet/${id}`);

      setPetDetails({ ...response.data });
    }
    fetchPetDetails();
  }, [id]);

  return (
    <div className="ml-3 mt-4">
      <div className="row">
        <img
          className="img-fluid rounded-circle pet-avatar ml-3"
          alt={petDetails.name}
          src={petDetails.picture}
        />

        <div>
          <Link to={`/pet/edit/${id}`} className="btn btn-primary">
            Edit
          </Link>
          <button onClick={() => setShowModal(true)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      {/* Nome do pet */}
      <h4 className="mb-0">{petDetails.name}</h4>
      {/* Idade, cor e espécie do pet */}
      <small className="text-muted">
        {petDetails.age} {petDetails.age > 1 ? "years" : "year"} old{" "}
        {petDetails.color} {petDetails.species}
      </small>

      {/* Do que o pet gosta e do que não gosta */}
      <span className="d-block">
        <strong>Likes: </strong>
        {petDetails.likes.join(", ")}
      </span>
      <span className="d-block">
        <strong>Dislikes: </strong>
        {petDetails.dislikes.join(", ")}
      </span>

      {/* Raça do pet */}
      <span className="d-block">
        <strong>Breed: </strong>
        {petDetails.breed}
      </span>

      {petDetails.adopted ? (
        <span className="badge badge-info">Adopted</span>
      ) : (
        <span className="badge badge-success">Available for adoption</span>
      )}

      <h4>Tagged in Posts</h4>
      {/* Posts em que o pet foi marcado */}
      <div className="row">
        {petDetails.taggedInPosts.map((post) => (
          <div key={post._id} className="col-4 p-1 ">
            <img className="pet-avatar" src={post.picture} alt={post.caption} />
          </div>
        ))}
      </div>
      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        action={`/pet/delete/${id}`}
      />
    </div>
  );
}

export default PetDetail;
