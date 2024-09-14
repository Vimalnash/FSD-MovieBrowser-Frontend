import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import noImageLabel  from "../assets/images/No_Image_Available.jpg"

const SearchView = ( { searchFinalText, searchResults} ) => {
  let titletext = '';
  if (searchFinalText === '') {
    titletext = 'Use SearchBox to search for the Films';
  } else
    titletext = `You Searched for ${searchFinalText}`;

  const Movies = ( {movie} ) => {
    let movieimage='';
    if (movie.poster_path === null) {
      movieimage = noImageLabel;      
    }
    if (movie.poster_path) {
      movieimage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }

    const moviedetailurl = `/moviedetails/${movie.id}`;

    return (
      // <li key={i}>{obj.original_title}</li>
      <div className="col-lg-2 col-md-3 col-2 my-4">
        <div className="card">
          {/* { {style="width: 18rem;} } */}
          <img src={movieimage} className="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to={moviedetailurl} className="btn btn-primary" target="_blank">Show Film Details</Link>
          </div>
        </div>
      </div>
    )
  }

  const NoResults = () => {
    return (<h2 className="col-9 my-5">There are no Results to Display</h2>)
  }

  let filmlist;
  if(searchResults) {
    filmlist = searchResults.map((obj, i) => {
      return <Movies movie={obj} key={i} />
    })
  } 
  if(searchFinalText === '' || searchResults.length === 0) {
      filmlist = <NoResults />
  }

  return (
    <>
      <Hero pagetitle={titletext} />
      <div className="container">
        <div className="row">
            {filmlist}
        </div>
      </div>
    </>
  );
};

export default SearchView;
