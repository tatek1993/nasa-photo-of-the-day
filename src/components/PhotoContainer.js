// https://api.nasa.gov/planetary/apod?api_key=004ZxtMALzfSSekpFzXvyZPdQqT3EQh1X3i17V8t
import React, {useState, useEffect} from "react";
import Photo from "./Photo";
import axios from "axios";
import styled from "styled-components";

const PODContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ButtonContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 80%;
`;

const ButtonStyle = styled.button `
    width: 40%;
    height: 50px;
    margin: 5%;
    border: 3px solid #F24222;
    border-radius: 10px;
    font-family: 'Audiowide', cursive;
    font-size: 1.5rem;
    color: #F24222;
`;

const PhotoContainer = props => {
    console.log(props);
    const [asop, setAsop] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=004ZxtMALzfSSekpFzXvyZPdQqT3EQh1X3i17V8t")
            .then(response => {
                console.log("hello!", response);
                setAsop(response.data);
                //asop = response.data now
                // console.log("me again", asop.title);
            })
            .catch(error => {
                console.log("Data is not returning", error)
            });
    }, []);
   return (
       <PODContainer>         
            <Photo 
                key={asop.date}
                // title={asop.title}
                // date={asop.date}
                // url={asop.url}
                // explanation={asop.explanation}
                // copyright={asop.copyright}
                data={asop}
            />     
            <ButtonContainer>
            <ButtonStyle>Previous</ButtonStyle>
            <ButtonStyle>Next</ButtonStyle>
            </ButtonContainer>                
            {console.log("woof", asop.date)}
       </PODContainer>
   );

}

export default PhotoContainer;