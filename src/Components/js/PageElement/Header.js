import React, {useState, useMemo} from 'react'
import { InputContext } from '../Hooks/InputContext'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Header.css'
import './Input.css'
import Account from '../Page/Account';
import Home from '../Page/Home';
import Popular from '../Page/Popular';
import Watching from '../Page/Watching';
import SearchInput from './SearchInput';


export default function Header() {

  const [value, setValue] = useState()

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const providerValue = useMemo(() => ({value, setValue}), [value, setValue])


  return (
    <div>
        <BrowserRouter>
        
        
          <header>
              <nav className='active'>
                  <ul>
                      <li><Link to="/" className='link'>Home</Link></li>
                      <li><Link to="/popular" className='link'>Popular</Link></li>
                      <li><Link to="/watching" className='link'>Watching</Link></li>
                      <li><Link to="/account" className='link'>Account</Link></li>
                  </ul>

                  <SearchInput value={value} change={handleValue}/>
              </nav>
          </header>
      


            <InputContext.Provider value={providerValue}>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/popular" element={<Popular />}/>
                <Route path="/watching" element={<Watching />}/>
                <Route path="/account" element={<Account />}/>
              </Routes>
            </InputContext.Provider>
        </BrowserRouter>
    </div>
  )
}
