import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project is Created By Irfan Anwar.
        To open Project Click the Writealy Link.
        
      </p>
      <ul>
        <li>
          <Link to="/writealy">Writealy</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
