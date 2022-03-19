import React, {useState} from 'react'
import './App.css';
import Header from './Components/js/Header';
import PopularMovie from './Components/js/PopularMovie';
import SearchMovies from './Components/js/SearchMovies';





function App() {
 
const [value, setValue] = useState()

const handleValue = (e) => {
  // e.stopPropagation()
  setValue(e.target.value)
}
  return (
    <>
      <Header value={value} change={handleValue}/>
      {value 
      ? <SearchMovies searchReq={value}/> 
      : <PopularMovie/>}
    </>
  );
}

export default App;
