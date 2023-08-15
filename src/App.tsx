import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="app">
          <PostList posts={posts} />
        </div>
      )}
    </>
  );
}

export default App;
