import "../css/Posts.css"
const Posts = ({ userPosts, onDelete, onUpdate }) => {
  return (
    <>
      <h1>My Posts ({userPosts.length})</h1>
      <ul >
        {userPosts.map((post) => (
          <li key={post.id} className="posts">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => onDelete(post.id)}>Delete</button>
            <button onClick={() => onUpdate(post.id)}>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Posts;