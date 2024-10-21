import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/StarshipSearch';
import StarshipList from './components/StarshipList';


const App = () => {
  
  const BASE_URL = 'https://swapi.dev/api/starships';
  const [starships , setStarships] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const fetchStarships = (starshipName = '') => {
    setLoading(true);
    axios.get(`${BASE_URL}/?search=${starshipName.toLowerCase()}`)
    .then(response => {
      setStarships(response.data.results);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const starshipSearchForm = new FormData(e.target);
    const starshipName = starshipSearchForm.get('name');
    fetchStarships(starshipName);
  }

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <Search handleSearch={handleSearch}/>
      {loading ? (
        <h3 className='container'>Loading...</h3>
      ) : (
        <StarshipList starships={starships}/>
      )}
    </>
  );
}

export default App
