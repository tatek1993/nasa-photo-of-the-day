import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from "styled-components";

const PhotoTile = styled.div `
    width: 80%;
    object-fit: scale-down;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #053B93;
    padding: 1%;
    border-radius: 60px;
    color: white;
    font-size: 1rem;
    letter-spacing: 3px;
    line-height: 2;
`;
const Explanation = styled.div `
    width: 80%;
    line-height: 2;
    margin: auto;
    
`;
export const Title = styled.div `
    // font-weight: bold;
    font-size: 1.7rem;
    margin: 3%;
    color: #F24222;
    text-shadow: 1px 1px white;
    letter-spacing: 3px;
`;
const CardImgStyle = styled.img `
    margin: 5%;
    border: 10px solid white;
`;
const Copyright = styled.p `
    padding: 3%;
    font-size: .9rem;
`;



const Photo = (props) => {
    console.log("WAH", props);
    return (
      <PhotoTile>
        <Card>
            <Title>{props.data.title}</Title>
            <CardSubtitle>{props.data.date}</CardSubtitle>
            <CardImgStyle top width="80%" src={props.data.url} alt={props.data.title} />
            <Explanation>{props.data.explanation}</Explanation>
            <Copyright>Image Credit & Copyright: {props.data.copyright}</Copyright>

        </Card>
      </PhotoTile>
    );
  };
export default Photo;