import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

// header  component
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  // search
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert("Please enter Search Term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }

  return (
    <div className="header">
      {/* links to home */}
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>

      {/* for search bar */}
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search..." onChange={(e) => setTerm(e.target.value)}/>
          <button type="submit"><i className="fa fa-search"></i> </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
