import React from "react";

const Photo = props => {
    // console.log(props);
    return(
        <div className="photoTile">
            <img alt="{props.title}" className="apod" src="{props.url}"/>
            <div className="photoInfo">
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <p>{props.explaination}</p>
                <p>{props.copyright}</p>
            </div>
        </div>
    )
};
export default Photo;