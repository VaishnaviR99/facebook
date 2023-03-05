import React from "react";


function Home({ user }) {
  return (<div>
    <h1>Welcome to our Facebook App!</h1>
    {user ? (
      <h2>
        Hello, {user.name}! You have {user.posts.length} posts.
      </h2>
    ) : (
      <h2>Please sign up or log in to see your posts.</h2>
    )}
  </div>
);
}

export default Home;