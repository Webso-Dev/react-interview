import { useEffect, useState } from "react";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const fetchComments = (postId) => {
  return fetch(`${COMMENTS_URL}?postId=${postId}&limit=10`).then((response) =>
    response.json()
  );
};

const fetchPosts = () => {
  return fetch(POSTS_URL).then((response) => response.json());
};

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="md:container">
      {posts.map((post) => (
        <div className="row-auto border-2 border-sky-500 rounded p-3 m-3">
          Something has to be done!
        </div>
      ))}
    </div>
  );
}

// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/posts
