import React, {useState,  useEffect} from 'react'
import { getData } from './GetData'
import ShowMovieInPage from './ShowMovieInPage'





export default function PopularMovie() {
    //  const search = useContext(SearchValue)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=060f347dcc7582a34aa7ccbecd45da16&page=1";
        
        const fetchData = async () => {
          try {
            const response = await getData(url);
            const json = await response.json();
            
            setMovies(movies =>  movies.concat(json.results))
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

  return (
    
   <main>
      {!movies ? 
      <p className='error'>Wait Data...</p> : 
      movies.map(item => <ShowMovieInPage data={item} key={item.id}/>)}
   </main>
 
  )
}
