 import Tours from '../tours/Tours';
 import "./Home.css" 
function Home(props) {
    return (
      <div id='Hoome' > 
        <div><Tours data={props.data}/></div>
      </div>
    )
  }
  export default Home;