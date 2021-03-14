import React, { Component } from 'react'
import axios from 'axios'

class SownCrops extends Component {
    constructor(){
        super()

        this.state = {
            garden: []
        }
    }

    // componentDidMount = () => {
    //     this.setState({
    //         garden: this.props.garden
    //     })
    // }

    // updateGarden = (id) => {
    //     id = +id
    //     let garden = this.state.garden
    //     axios.put(`/api/crops/${id}`, garden)
    //     .then(res => {
    //       this.setState({
    //         crops: res.data.crops,
    //         garden: res.data.garden
    //       })
    //     })
    //   }

    render(){
        return(
            <button>Dig Up Your Garden</button>
        )
    }
}
export default SownCrops