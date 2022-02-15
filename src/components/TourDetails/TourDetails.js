import {userParams} from 'react-router-dom';
 function TourDetails(props)
{
    let x;
    let {id} = userParams();
    
    for (let y of props.data){
        if(y.id == id  ) {
            x = y;
        }
    }
    return (
<div id='tourr'>
    <h1>{x.name}</h1>
    <h2>{x.info}</h2>
    <button onClick={click}>see more</button>
</div>
    );
}
export default TourDetails
function click()
{

}
