
import React from 'react'

const ChooseCrops = (props) => {
    return(
    <button className='veggie-button' onClick={() => props.selectVeggie(props.veggie)}>
        <img src={props.img}/>
    </button>
    )
     
}
export default ChooseCrops