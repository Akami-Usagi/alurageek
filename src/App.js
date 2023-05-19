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

  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage setCharData={setCharData}/>} />
        <Route path={`/${charData.nombre}`} element={<CharacterDetails charData={charData}/>} />
        <Route path='/more' element={<SeeMore/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
