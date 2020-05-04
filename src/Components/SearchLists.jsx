import React, { Component } from 'react'
import BreedFeed from '../Components/breedFeed';
import Loading from '../Common/loading'
//import { toUpperCase } from '../Common/helpers';
import axios from 'axios';



class SearchLists extends Component {

    state = {
        searchedData: [],
        loading:true,
        error:[]
    }
    componentDidMount () {
        setTimeout(() => {
            this.searchBreedsByName ()
            this.setState({loading:false})
        },1000);
        
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
    const {searchedData, loading} = this.state
    console.log(searchedData.lengthlength)
    let  searchedDataContent;
    if(loading){
        searchedDataContent=<Loading/>
    }
    else {
        if(searchedData && searchedData.length > 0){
            searchedDataContent = <BreedFeed data={searchedData}/>
        }
        else{
            if(this.state.error.length>0){
                searchedDataContent = <h1>Data Not found</h1>
            }
        }
    }
    
        return (
            <div>
                <section className="hero-section pt-5 pb-5">
                    <div className="container">
        <h3 className="text-center mb-5 ">Browse  Breeds </h3>
            <div className="row justify-content-center mt-5">
            
            
            {searchedDataContent}
            </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default  SearchLists;