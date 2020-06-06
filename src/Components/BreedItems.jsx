import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class BreedItems extends Component {
    render() {
        //const {breed} =this.props
            console.log('propsData',this.props.breed)
        
        return (
            <div className="col-md-3-5">
                <div className="card">
                    <div className="card-body">
        <h5 className="card-title">Name: {this.props.breed.name}</h5>
                        <h5 className="card-title">Origin: {this.props.breed.origin}</h5>
                        <h5 className="card-title">Temperament: {this.props.breed.temperament}</h5>
                        <Link to= {`/breed-details/${this.props.breed._id}`} className="btn btn-info mr-1"> Details </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default  BreedItems;