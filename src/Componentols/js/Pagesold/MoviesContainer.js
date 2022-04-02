import React, {useState} from 'react'
import Header from '../Header.js';
import PopularMovie from '../Pages/PopularMovie';
import SearchInput from '../SearchInput.js';
import SearchMovies from '../SearchMovies';


export default function MoviesContainer() {

    const [value, setValue] = useState()

    const handleValue = (e) => {
    setValue(e.target.value)
    }


  return (
    <>
    
    {value 
    ? <SearchMovies searchReq={value} /> 
    : <PopularMovie />}
  </>
  )
}
