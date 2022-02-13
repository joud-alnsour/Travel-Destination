import data from '../../data/db';

function Tours() {
    return (
        <div>
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