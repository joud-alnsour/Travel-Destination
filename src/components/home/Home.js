import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import data from '../../data/db'
function Home() {

    return (
      <>
        <div><Header/></div>
        <div><Tours data={data}/></div>
        <div><Footer/></div>
      </>
    )
  }
  export default Home;