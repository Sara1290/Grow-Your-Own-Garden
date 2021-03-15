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
            <button onClick={() => this.props.updateGarden}>Dig Up Your Garden</button>
        )
    }
}
export default SownCrops