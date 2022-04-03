import React, {useState, useEffect} from 'react'
import { getData } from './GetData'

import ShowMovieInPage from './ShowMovieInPage'


export default function SearchMovies(props) {
    const [result, setResult] = useState([])
    const {valueInput} = props
    useEffect(() => {
      const url = "https://api.themoviedb.org/3/search/movie?api_key=060f347dcc7582a34aa7ccbecd45da16&query=";

      const fetchData = async () => {
        try {
          const response = await getData(url+valueInput);
          const json = await response.json();
          setResult(result => result.concat(json.results))
          
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();

  }, [valueInput]);
  
  

let filterMovie = result.filter(item => {
  if(!item) {
    return
  } else {
    return item.title.toLowerCase().includes(valueInput.toLowerCase())
  }
})




  return (
    <div className='home-movie'>
     {filterMovie.map(item => <ShowMovieInPage key={item.id} data={item}/>)}
    </div>
  )
}
