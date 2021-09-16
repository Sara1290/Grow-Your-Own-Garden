import React, { Component } from 'react'
import Harvest from './Harvest'
// import axios from 'axios'

class Garden extends Component {
    constructor(){
        super()

        this.state = {
            garden: []
        }
    }

  
    render(){
        console.log(this.props)
        this.setState.garden = this.props.garden
        const harvest = this.state.garden.map((veggie, i) => {
            return(
              <Harvest updateGarden={this.props.updateGarden} img={veggie.img} veggie={veggie} />
            )
          })
        return(
            <div className='garden-body'>
                {harvest}
            </div>
        )
    }
}
export default Garden