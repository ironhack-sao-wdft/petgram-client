import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/petgram-api";
import "./MyPets.css";

function MyPets() {
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    async function fetchMyPets() {
      try {
        const response = await api.get(`/pet`);
        setMyPets([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMyPets();
  }, []);

  return (
    <div className="container-fluid">
      <h1>My Pets</h1>
      <div className="row">
        {myPets.map((myPet) => {
          return (
            <div className="col-6 p-1" key={myPet._id}>
              <Link to={`/pet/${myPet._id}`}>
                <div className="card border-0  mb-2">
                  <img
                    src={myPet.picture}
                    className="card-img-top rounded-0 img-grid-size"
                    alt={myPet.name}
                  />
                  <div className="card-body p-1">
                    <span>{myPet.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyPets;
