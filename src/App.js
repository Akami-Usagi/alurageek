import './App.css';
import Header from './components/header';
import MainPage from './pages/mainPage';
import CharacterDetails from './pages/characterDetais';
import SeeMore from './pages/seeMore';
import Footer from './components/footer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [charData, setCharData] = useState({})

  const Data = JSON.parse(localStorage.getItem("personaje"))

  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage setCharData={setCharData}/>} />
        <Route path={`/${Data.nombre}`} element={<CharacterDetails charData={Data}/>} />
        <Route path='/more' element={<SeeMore/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
