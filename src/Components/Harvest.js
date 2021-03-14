import React from 'react'

const Harvest = (props) => {
    return(
    <div>
        <button onClick={() => props.updateGarden(props.veggie.id)}>Harvest</button>
        <img src={props.img}/>
    </div>
    )
     
}
export default Harvest