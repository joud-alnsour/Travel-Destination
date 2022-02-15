import "./Tour.css" 

function Tour(props)
{
    return(
    <div id='Tourr'>
        <h1>{props.tour.name}</h1>
        <img src={props.tour.image} alt="any"></img>
    </div>

    );
}
export default Tour;