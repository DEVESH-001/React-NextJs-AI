import { useEffect } from "react";
import { usePostsStore } from "../store/postStore";

function Posts() {
  const { posts, loading, error, fetchPosts } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  if (loading) return <div>Loading // || \\</div>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
