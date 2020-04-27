import React, { Component } from 'react';
import BreedFeed from '../Components/breedFeed'
import axios from 'axios';
class Breeds extends Component {

    

    state = {
        breeds:[]
    }

    componentDidMount() {
             axios.get('https://breedscat.herokuapp.com/api/v1/breeds')
        .then(response => {
    this.setState({breeds:response.data})
        })
        .catch(error => {
          console.log(error);
        });
      }
    render() {
        
        return (
            <div>
                <section className="hero-section pt-5 pb-5">
                <div className="container" >
                    <h3 className= "text-center mb-5 ">Browes All Breeds</h3>
                    <div className="row justify-content-center mt-3">
<BreedFeed data={this.state.breeds}/>

                    </div>
                </div>
                </section>
                


                </div>


                
            
        )
    }
}
export default  Breeds;