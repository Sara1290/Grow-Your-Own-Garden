import React from 'react'

const Harvest = (props) => {

    return(
    <footer>
        <button className='harvest-button' onClick={() => props.updateGarden(props.veggie.id)}>Harvest</button>
        <img alt="vegetable cartoon" src={props.img}/>
    </footer>
    )
     
}
export default Harvest