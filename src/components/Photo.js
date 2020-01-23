import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from "styled-components";

const PhotoTile = styled.div `
    width: 60%;
    object-fit: scale-down;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #053B93;
    padding: 3%;
    border-radius: 60px;
    color: white;
`;
const CardBodyStyle = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // background: red;
`;
const Explanation = styled.div `
    width: 80%;
    line-height: 1.5;
    margin: 10px;
    // display: flex;
    // justify-content: center;
    
`;
const Title = styled.div `
    font-weight: bold;
    font-size: 1.5rem;
`


const Photo = (props) => {
    return (
      <PhotoTile>
        <Card>
          <CardImg top width="80%" src={props.url} alt={props.title} />
          <CardBodyStyle>
            <Title>{props.title}</Title>
            <CardSubtitle>{props.date}</CardSubtitle>
            <Explanation>{props.explanation}</Explanation>
            <CardText>Image Credit & Copyright: {props.copyright}</CardText>
            <Button>Previous</Button>
            <Button>Next</Button>
          </CardBodyStyle>
        </Card>
      </PhotoTile>
    );
  };
export default Photo;