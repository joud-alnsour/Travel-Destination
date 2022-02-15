import Tours from '../tours/Tours';
 import "./Home.css" 
 import Header from '../header/Header.js';
 import Footer from '../footer/Footer.js';
 function Home(props) {
    return (
      <div id='Hoome' > 
      <Header/>
        <Tours data={props.data} /> 
      <Footer/>
      </div>
    )
  }
  export default Home;