import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landing';
import Home from './components/home';
import CountryDetail from './components/detail';
import CreateActivity from './components/create';
import Credits from './components/credits';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/countries' element={<Home/>}/>
          <Route path='/countries/:id' element={<CountryDetail/>}/>
          <Route path='/activity' element={<CreateActivity/>}/>
          <Route path='about' element={<Credits/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
