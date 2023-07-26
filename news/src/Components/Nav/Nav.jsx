import React from "react";
import { useNavigate } from "react-router-dom";

function Nav({ setNavList, navList }) {
  const navigate = useNavigate();

  const handleClick = (e)=>{
    e.preventDefault()
    setNavList(e.target.id);
    let path = "/Navlist"
    navigate(path)
  }

  

  const pages = [
    "arts",
    "automobiles",
    "business",
    "fashion",
    "food",
    "home",
    "insider", 
    "movies",
    "obituaries",
    "politics",
  ];
  

  const list = pages.map((page) => {
    return (
      <a className="nav-item nav-link" id={page} href="/" onClick={handleClick}>
        {page}
      </a>
    );
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          NEWS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">{list}</div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
