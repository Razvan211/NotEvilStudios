import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects'


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
