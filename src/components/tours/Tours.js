import data from '../../data/db';
import "./Tours.css" 

function Tours() {
    return (
        <div id='Tours'>
            {data.map((x) => {
                return (
                    <div>
                        <div>This is : {x.name} </div>
                        <div><img src={x.image} alt=' ' /></div>
                    </div>
                );
            })}
        </div>
    );
}
export default Tours;