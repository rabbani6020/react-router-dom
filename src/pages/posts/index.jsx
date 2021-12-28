import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setLoading(false);
        setPosts(res.data.slice(0,10));
      })
      .catch((error) => {
        setErrors(error);
      });
  }, []);

  return (
    <>
      <>
        <div>
          <h2>This is posts Component</h2>
          {!!isLoading && <h2 className="loading">Loading......</h2>}
          {!!errors && <h2>{errors}</h2>}
          {!!posts && (
            <ul className="d-grid gap-4">
              {posts.map((post) => (
                <li className="card p-3" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    </>
  );
};

export default Posts;
