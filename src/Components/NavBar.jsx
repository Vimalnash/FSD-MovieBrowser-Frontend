import { useNavigate , Link } from "react-router-dom";

function Navbar({searchFinalText, setSearchFinalText, searchInputText, setSearchInputText, showHome, setShowHome}) {
  // This can be written as const Navbar = () => {}
  const navigate = useNavigate();

  const changedText = (e) => {
    navigate("/search")
    setSearchInputText(e.target.value);
  }

  const readySearch = (event) => {
    event.preventDefault();
    navigate("/search")
    setSearchFinalText(searchInputText);
    console.log("Search Button clicked, search text is", searchFinalText)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          MovieBrowser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="tolinkitemnavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="tolinkitem"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-disabled="true"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="tolinkitem">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="tolinkitem" aria-disabled="true">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="linktoitem" aria-disabled="true">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="linktoitem"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </Link>
            </li>
            {
              showHome ?
              (
                <li className="nav-item">
                  <button className="btn btn-danger" type="button" onClick={() => {navigate("/login"); setShowHome(false);}} >
                    Logout
                  </button>
                </li>
              )
              :
              ("")
            }

          </ul>
          {
            showHome ?
            (
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchInputText}
                  // readOnly
                  onChange={changedText}
                  // onChange={(e) => {setSearchText(e.target.value)}}
                />
                <button className="btn btn-outline-success" type='submit' onClick={readySearch}>
                    Search
                </button>
              </form>
            )
            :
            (
              <button className="btn btn-success" type="button" onClick={() => navigate("/login")}>
                Login to Search
              </button>
            )
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
