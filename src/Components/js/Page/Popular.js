import React, {useState, useEffect, useContext} from 'react'
import { getData } from '../Hooks/GetData'
import ShowMovieInPage from '../Hooks/ShowMovieInPage';
import { PagesLink } from '../PageElement/PagesLink';
import { InputContext } from '../Hooks/InputContext'
import SearchMovies from '../Hooks/SearchMovies';



export default function Home() {

const req = useContext(InputContext)


const [movies, setMovies] = useState([])

  useEffect(() => {
 
    const fetchData = async () => {
      try {
        const response = await getData(PagesLink.popular);
        const json = await response.json();
        setMovies(movies => movies.concat(json.results))
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  return (
    <div className='home-movie'>
      
      { 
        !req.value
        ? movies.map(item => <ShowMovieInPage key={item.id} data={item}/>)
        : <SearchMovies valueInput={req.value}/>
      }

      
    </div>
  )
}
