//okay FRONT END time. get into react mode. // make some components.
import React, { Component } from 'react'
import Garden from './Components/Garden'
import axios from 'axios'
import './App.css';
import ChooseCrops from './Components/ChooseCrops';


class App extends Component {
  constructor(){
    super()

    this.state = {
      crops: [],
      garden: []
    }
  }
  

componentDidMount = () => {
axios.get('/api/cropSeeds')
.then(res => {
  this.setState({
    crops: res.data.crops,
    garden: res.data.garden
  })
})
}

selectVeggie = (veggie) => {
  axios.post('/api/crops', veggie)
  .then(res => {
    this.setState({
      crops: res.data.crops,
      garden: res.data.garden
    })
  })
}

updateGarden = (id) => {
  id = +id
  let garden = this.state.garden
  axios.put(`/api/crops/${id}`, garden)
  .then(res => {
      console.log(res)
    this.setState({
      garden: res.data
    })
  })
} 

  render(){
    console.log(this.state)
    const chooseCrops = this.state.crops.map((veggie, i ) => {
      return(
        <ChooseCrops img={veggie.img} veggie={veggie} selectVeggie={this.selectVeggie}/>
      )
    })
    
  return (
    <div className="App">
     {chooseCrops}
     
     <Garden updateGarden={this.updateGarden} garden={this.state.garden}/>
    </div>
   )
  }
}

export default App;
