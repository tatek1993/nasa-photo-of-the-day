// https://api.nasa.gov/planetary/apod?api_key=004ZxtMALzfSSekpFzXvyZPdQqT3EQh1X3i17V8t
import React, {useState, useEffect} from "react";
import Photo from "./Photo";
import axios from "axios";

const PhotoContainer = props => {
    console.log(props);
    const [asop, setAsop] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=004ZxtMALzfSSekpFzXvyZPdQqT3EQh1X3i17V8t")
            .then(response => {
                console.log("hello!", response);
                setAsop(response.data);
                console.log("me again", asop.title);
            })
            .catch(error => {
                console.log("Data is not returning", error)
            });
    }, []);
   return (
       <div className="photoOfTheDay">
         
            <Photo 
                key={asop.hdurl}
                title={asop.title}
                date={asop.date}
                url={asop.url}
                explanation={asop.explanation}
                copyright={asop.copyright}
            /> 

                     
            {console.log("woof", asop.date)}
       </div>
   );

}

export default PhotoContainer;