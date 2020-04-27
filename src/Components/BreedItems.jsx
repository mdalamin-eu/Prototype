import React, { Component } from 'react'

class BreedItems extends Component {
    render() {
        
            console.log('propsData',this.props.breed)
        
        return (
            <div className="col-md-3-5">
                <div className="card">
                    <div className="card-body">
        <h5 className="card-title">Name: {this.props.breed.name}</h5>
                        <h5 className="card-title">Origin: {this.props.breed.origin}</h5>
                        <h5 className="card-title">Temperament: {this.props.breed.temperament}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default  BreedItems;