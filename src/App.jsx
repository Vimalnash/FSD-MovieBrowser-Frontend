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
  const [showHome, setShowHome] = useState(false);

  const moviekey = import.meta.env.VITE_API_KEY;
  const movietoken = import.meta.env.VITE_TOKEN;

  useEffect(() => {
    if (searchFinalText) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${movietoken}`
        }
      };
      
      const url=`https://api.themoviedb.org/3/search/movie?query=${searchFinalText}&api_key=${moviekey}/`
      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          // console.log(data)
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
        <Route exact path="/home" element={<Home />} />

        <Route path="/login" element={
            <Login 
              userName={userName} 
              setUserName={setUserName} 
              userPassword={userPassword} 
              setUserPassword={setUserPassword} 
              setShowHome={setShowHome}
            />
          }
        />
      <Route path="/about" element={<AboutView />} />
      <Route path="/search" element={
          <SearchView searchFinalText={searchFinalText} searchResults={searchResults} />
        } 
      />
      <Route path="/moviedetails/:movieid" element={<MovieDetails />} />
    </Routes>
    </div>
  );
}

export default App;
