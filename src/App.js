import './App.css';
import Header from './components/header/Header'; 
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
 import {Routes,Route} from 'react-router-dom';
import tour from "./data/db.json";
import Navbar from './components/Navbar/Navbar';
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
    <>
    <Navbar/>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={tour}/>} />
        <Route path="/city/:id" element={<TourDetails data={tour}/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;