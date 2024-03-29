import React from 'react';
import SearchInput from '../Common/SearchInput'
const SearchArea = () => {
    return(
        <section className="hero-section pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="search">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title mb-3">find your perfect cat breed</h3>
                                    <form>
                                        <SearchInput/>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SearchArea;