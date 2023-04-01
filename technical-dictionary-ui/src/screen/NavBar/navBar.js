import React, { useState } from "react";
import WriteNewArticlePage from "../WriteNewArticlePage/writeNewArticlePage";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  
  const createNewArticle = () => {
    navigate('/newArticle')
  }
  
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <button
          onClick={createNewArticle}
          style={{ marginLeft: "90%" }}
          class="btn btn-outline-success"
        >
          Write Article
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
