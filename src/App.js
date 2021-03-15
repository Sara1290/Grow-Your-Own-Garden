//okay FRONT END time. get into react mode. // make some components.
import React, { Component } from 'react'
import Garden from './Components/Garden'
import axios from 'axios'
import './App.css';
import ChooseCrops from './Components/ChooseCrops';
import SownCrops from './Components/SownCrops';
import Header from './Components/Header';


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
.catch(err => console.log(err))
}

selectVeggie = (veggie) => {
  axios.post('/api/cropSeeds', veggie)
  .then(res => {
    this.setState({
      crops: res.data.crops,
      garden: res.data.garden
    })
  })
  .catch(err => console.log(err))
}

updateGarden = (id) => {
  id = +id
  let {garden} = this.state
  axios.put(`/api/cropSeeds/${id}`, garden)
  .then(res => {
    this.setState({
      garden: res.data
    })
  })
  .catch(err => console.log(err)) 
} 

  deleteGarden = () => {
    let {garden} = this.state
    axios.delete('/api/cropSeeds', garden)
    .then(res => {
      this.setState({
        garden: []
      })
    })
    .catch(err => console.log(err))
  }


  render(){
    // console.log(this.state)
    const chooseCrops = this.state.crops.map((veggie, i ) => {
      return(
        <ChooseCrops img={veggie.img} veggie={veggie} selectVeggie={this.selectVeggie}/>
      )
    })
    
  return (
    <div className="App">
     <Header />
     {chooseCrops}
     <Garden updateGarden={this.updateGarden} garden={this.state.garden}/>
     <SownCrops garden={this.state.garden} deleteGarden={this.deleteGarden} />
    </div>
   )
  }
}

export default App;
