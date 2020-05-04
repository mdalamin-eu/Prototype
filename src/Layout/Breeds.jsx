import React, { Component } from 'react';
import BreedFeed from '../Components/breedFeed'
import Loading from '../Common/loading'
import axios from 'axios';
class Breeds extends Component {


    state = {
        breeds:[],
        loading:true,
        error:[]
    }

    componentDidMount() {
  setTimeout(() => {
    this.apiCall() 
    this.setState({loading:false}) 
}, 2000);   

      }

      apiCall = () => {
        axios.get('https://breedscat.herokuapp.com/api/v1/breeds')
        .then(response => {
    this.setState({breeds:response.data})
        })
        .catch(error => {
          this.setState({error});
        });
      }

  
    
    render() {

        const {breeds, loading} = this.state
   console.log(breeds.length)
        let  breedsContent;

        if(loading ) {
         breedsContent =<Loading/>
        }
    
        else {
            //console.log(breeds && breeds.length > 0)
             if(breeds && breeds.length > 0) {
               breedsContent = <BreedFeed data={breeds}/>
             }
             else  {
                 if(this.state.error.length>0) {
                    breedsContent = <h1>Something went wrong</h1>
                 }

                
             }
        }
         
        return (
            <div>
                <section className="hero-section pt-5 pb-5">
                <div className="container" >
                    <h3 className= "text-center mb-5 ">Browes All Breeds</h3>
                    <div className="row justify-content-center mt-3">
               {breedsContent}

                    </div>
                </div>
                </section>
                
                </div>
            
        )
    }
}
export default  Breeds;