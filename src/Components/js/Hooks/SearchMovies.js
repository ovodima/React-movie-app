import React, {useState, useEffect} from 'react'
import { getData } from './GetData'
import ShowMovieInPage from './ShowMovieInPage'


export default function SearchMovies(props) {
    const [result, setResult] = useState([])
    const {searchReq} = props
    
    useEffect(() => {
      const url = "https://api.themoviedb.org/3/search/movie?api_key=060f347dcc7582a34aa7ccbecd45da16&query=";
      
      const fetchData = async () => {
        try {
          const response = await getData(url + searchReq);
          const json = await response.json();
          setResult(result => result.concat(json.results))
          
          
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();

  }, [searchReq]);
  

const filterMovie = result.filter(movie => {
  return movie.title.toLowerCase().includes(searchReq.toLowerCase())
})

  return (
    <main>
     {!result ? 
      <p className='error'>Wait Data...</p> : 
      filterMovie.map(item => <ShowMovieInPage data={item} key={item.id}/>)}
    </main>
  )
}
