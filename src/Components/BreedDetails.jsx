import React, { Component } from 'react';
import Loading from '../Common/loading'
import axios from 'axios';


 class BreedDetails extends Component {
   state= {
       detailsData: {},
       loading:true,
       error: []
   }
componentDidMount () {
    setTimeout(() => {
        this.detailsById()
        this.setState({loading:false})
    },1500);
}
detailsById =() => {
const id = this.props.match.params.id;
console.log(id)
        axios.get(`https://­breedscat.herokuapp.c­om/api/v1/breeds/${id}`)
    .then(response => {
        console.log(response)
            this.setState({detailsData:response.data})

        })
        
        //.catch(error => {
          //  console.log(error);
        //});
    }
    render() {
        const {detailsData, loading, error} = this.state
        console.log(error)
        let detailsDataContent;
        if (detailsData===null || loading) {
        
            detailsDataContent = <Loading/>
        }
        else {
                detailsDataContent =(<div className="col-md-6">
                <div className="card">
                    <div className="card-body">
            <h2 className="card-title">Name:{detailsData.name}</h2>
            <p className="muted">Description:{detailsData.description}</p>
            <h5 className="card-title">Temperament:{detailsData.temperament}</h5>
            <h5 className="card-title">Origin:{detailsData.origin}</h5>
                    </div>
            </div>
        </div>)
            }
            
        
        return (
            <section className="hero-section pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        {detailsDataContent}
                    </div>
                
                </div>
            </section>
          );

    }
  
}

export default BreedDetails;