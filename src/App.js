import React, {useState} from 'react'
import './App.css';
import Header from './Components/js/Header';
import PopularMovie from './Components/js/PopularMovie';
import SearchMovies from './Components/js/SearchMovies';





function App() {
 
const [value, setValue] = useState(null)

const handleValue = (e) => {
  e.preventDefault()
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
