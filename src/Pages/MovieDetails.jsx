import Hero from '../Components/Hero';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import noImageLabel  from "../assets/images/No_Image_Available.jpg"

const MovieDetails = () => {
    const { movieid } = useParams();
    // console.log(movieid)
    const moviekey = import.meta.env.VITE_API_KEY;


    const [movieDetails, setMovieDetails] = useState({});
    const [movieDetailsLoading, setMovieDetailsLoading] = useState(true);

    useEffect( () => {
        // console.log("request moviedetails for", movieid)
        fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${moviekey}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setTimeout(() => {
                    setMovieDetails(data);
                    setMovieDetailsLoading(false);
                }, 1000)
            })
    }, [movieid] )

    function TitleDataLoading () {
        if (movieDetailsLoading) {
            return <Hero pagetitle={`Loading Please Wait...`} />
        }

        if (movieDetails) {
            const backdropImageUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
            
            let filmposterimageurl='';
            if (movieDetails.poster_path === null){
                filmposterimageurl = noImageLabel;
            }
            if (movieDetails.poster_path){
                filmposterimageurl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
            }

            return (
                <>
                    <Hero pagetitle={`Movie Details for - ${movieDetails.original_title}`} backdropurl={backdropImageUrl}/>
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-md-3">
                                <img src={filmposterimageurl} alt="Not Available" className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-6">
                                <h2>
                                    {movieDetails.original_title}
                                </h2>
                                <h4>
                                    ({movieDetails.tagline})
                                </h4>
                                <div className="my-2">
                                    {movieDetails.overview}
                                </div>
                                <div className="my-2">
                                    Status : {movieDetails.status}
                                </div>
                                <div className="my-2">
                                    Released Date : {movieDetails.release_date}
                                </div>
                                <div className="my-2">
                                    Movie Budget : {movieDetails.budget}
                                </div>
                                <div className="my-2">
                                    Movie Revenue : {movieDetails.revenue}
                                </div>
                                <div className="my-2">
                                    Popularity : {movieDetails.popularity}
                                </div>
                                <div className="my-2">
                                    Genres : {movieDetails.genres.map((genresnames, i) => {return (`"${genresnames.name}"`)})}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return(
            <TitleDataLoading />
    )
}

export default MovieDetails;