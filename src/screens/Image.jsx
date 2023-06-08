import React from "react";
const noImage = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'

function Image(props){
    
    return(
        <img src={props.data ? props.data.url : noImage} alt="No image" className="card-img-top" height={300} />
    )
}

export default Image