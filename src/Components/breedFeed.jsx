import React from "react"
import BreedItems from "./BreedItems";

const BreedFeed = (props) => {
    if (props.data && props.data.length > 0){
    
        console.log('propsdata',props.data);
        return props.data.map(breed => <BreedItems breed={breed} />);
   
    
    }
return null
};
export default BreedFeed;