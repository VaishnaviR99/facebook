import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Signup from "../pages/Signup.js";
import Login from "../pages/Login";
import Posts from "../pages/Posts";

function Rout() {
  return (

<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      
      {/* <Route path="/posts/:id/delete" element={<DeletePost />} /> */}
      {/* <Route path="/posts/:id/update" element={<UpdatePost />} /> */}
    </Routes>
    );
}
export default Rout;