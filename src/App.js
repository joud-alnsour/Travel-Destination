
import './App.css';
import Header from './components/header/Header'; 
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
 import {Routes,Route} from 'react-router-dom';
import tour from "./data/db.json";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={tour}/>} />
        <Route path="/city:id" element={<Header data={tour}/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
