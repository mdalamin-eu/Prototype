import React, { Fragment,Component } from 'react'
import{BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import SearchArea from './Layout/SearchArea'
import Breeds from './Layout/Breeds'
import BreedDetails from './Components/BreedDetails'
import BreedsSearchLists from './Components/SearchLists'
//import Alert from './Common/'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Fragment>
         
          <Navbar />
        
           
            <Route exact path="/" component={ SearchArea } />
           <Route exact path="/" component={ Breeds } />
          <Switch>
              
              <Route exact path="/breeds" component={ Breeds } />
              <Route exact path="/breed-details/:id" component={BreedDetails} />
              <Route exact path="/breed/:breed" component={BreedsSearchLists} />
              
            </Switch>
       
           
          </Fragment>
          </Router>
    </div>
  );
}

}

export default App;