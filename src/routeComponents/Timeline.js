import { useState, useEffect } from "react";
import axios from "axios";

import Post from "../components/Post";
import Spinner from "../components/Spinner";

function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect com a array de dependências vazia tem o mesmo comportamento do componentDidMount
  useEffect(() => {
    // Não podemos tornar a callback do useEffect assíncrona, portanto precisamos criar uma nova função dentro da callback para poder usar o async/await
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:4000/post");

        console.log(response);

        setPosts([...response.data]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {loading ? (
        <Spinner className="mt-5" color="text-secondary" />
      ) : (
        <div>
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Timeline;
