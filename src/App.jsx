import './App.css';
import Navbar from "./Components/NavBar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import AboutView from "./Pages/AboutView";
import SearchView from './Pages/SearchView';
import MovieDetails from './Pages/MovieDetails';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInputText, setSearchInputText] = useState('');
  const [searchFinalText, setSearchFinalText] = useState('');
  const [userName, setUserName] = useState('avi');
  const [userPassword, setUserPassword] = useState('avi');
  const [showHome, setShowHome] = useState(false)

  useEffect(() => {
    if (searchFinalText) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMzZDJkMTMzNzFmYWM2MjY4NjEyM2NlZmJhYzBiNSIsInN1YiI6IjY0ZTIzZjM5OGMwYTQ4MDExZDQyYzI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CDr0HqTwav5ZP19X7EcKZGRVZdZvUz956n2KZs9e3ag'
        }
      };
      
      const url=`https://api.themoviedb.org/3/search/movie?query=${searchFinalText}&api_key=2433d2d13371fac62686123cefbac0b5/`
      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        // .catch(err => console.error(err));
      })
    }
  }, [searchFinalText] )

  return (
    <div>
      <Navbar searchInputText={searchInputText} setSearchInputText={setSearchInputText}  
        searchFinalText={searchFinalText} setSearchFinalText={setSearchFinalText} 
        showHome={showHome} setShowHome={setShowHome} 
      />
      <Routes>
        <Route path="/" element={
            <Login 
              userName={userName} 
              setUserName={setUserName} 
              userPassword={userPassword} 
              setUserPassword={setUserPassword} 
              setShowHome={setShowHome}
            />
          }
        />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/search" element={
        <SearchView searchFinalText={searchFinalText} searchResults={searchResults} />
      } 
      />
      <Route path="/moviedetails/:movieid" element={<MovieDetails />} />
    </Routes>    
      {/* <ShowHomePage showHome={showHome} /> */}
    </div>
  );
}

export default App;


  // console.log(searchText, " is the text you searched for")
  // setSearchText('NewText');
  // setTimeout(function() {
  //   console.log(searchText, " changed")
  // }, 2000)

  // const ShowHomePage = ({showHome}) => {
  //   if (showHome) {
  //     return (
  //       <>
  //         <Navbar searchInputText={searchInputText} setSearchInputText={setSearchInputText}  
  //                 searchFinalText={searchFinalText} setSearchFinalText={setSearchFinalText} 
  //                 showHome={showHome} setShowHome={setShowHome} 
  //         />
  //         <Routes>
  //           <Route path="/home" element={<Home />} />
  //           <Route path="/about" element={<AboutView />} />
  //           <Route path="/search" element={
  //             <SearchView searchFinalText={searchFinalText} searchResults={searchResults} />
  //             } 
  //           />
  //           <Route path="/moviedetails/:movieid" element={<MovieDetails />} />
  //         </Routes>        
  //       </>
  //     )
  //   }
  // }
