import React, { Component } from 'react'
import{BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import SearchArea from './Layout/SearchArea'
import Breeds from './Layout/Breeds'
import BreedDetails from './Components/BreedDetails'
import BreedSearchList from './Components/SearchLists'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Route exact path="/" component={ SearchArea} />
        <Route exact path="/" component={Breeds}/>
        <Route exact path="/"  component ={BreedDetails}/>
        <Route exact path ="/" component ={BreedSearchList}/>

        </Router>
        
      </div>
    )
  }
}
export default  App;