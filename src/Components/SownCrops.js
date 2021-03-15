import React, { Component } from 'react'


class SownCrops extends Component {
    constructor(){
        super()

        this.state = {
            garden:[]
        }
    }



    render(){
        return(
            <button className='dig-button' onClick={() => this.props.deleteGarden()}>Dig Up Your Garden</button>
        )
    }
}
export default SownCrops