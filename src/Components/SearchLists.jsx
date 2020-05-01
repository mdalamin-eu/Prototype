import React, { Component } from 'react'
import BreedFeed from '../Components/breedFeed';
//import { toUpperCase } from '../Common/helpers';
import axios from 'axios';



class SearchLists extends Component {

    state = {
        searchedData: []
    }
    componentDidMount () {
        this.searchBreedsByName ()
    }
    componentDidUpdate(prevProps) {
        const currentUrlParam = this.props.match.params.breed;
        const prevUrlParam = prevProps.match.params.breed;

        if (currentUrlParam !== prevUrlParam) {
            this.searchBreedsByName();
        }
    }
    searchBreedsByName =() => {
        const searchedName = this.props.match.params.breed;
        axios.get(`https://breedscat.herokuapp.com/api/v1/breeds?name=${searchedName}`)
        .then(response => {
            this.setState({searchedData:response.data})
                })
                .catch(error => {
                  console.log(error);
                });

        //this.props.dispatch(getbreeds(searchedBreed));
            }
            
    render() {
    const {searchedData} = this.state
        return (
            <div>
                <section className="hero-section pt-5 pb-5">
                    <div className="container">
        <h3 className="text-center mb-5 ">Browse  Breeds </h3>
            <div className="row justify-content-center mt-5">
            <BreedFeed data={searchedData}/>

            </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default  SearchLists;