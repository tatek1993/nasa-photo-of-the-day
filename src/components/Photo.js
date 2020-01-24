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
    background: #053B93;
    padding: 3%;
    border-radius: 60px;
    color: white;
    font-size: 1rem;
    letter-spacing: 3px;
    line-height: 2;
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
    margin: 2%;
    
`;
export const Title = styled.div `
    // font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2%;
    color: #F24222;
    text-shadow: 1px 1px white;
    letter-spacing: 3px;
`;
const CardImgStyle = styled.img `
    margin: 5%;
    border: 10px solid white;
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
    border-radius: 10px;
    font-family: 'Audiowide', cursive;
    font-size: 1.5rem;
    color: #F24222;
`


const Photo = (props) => {
    return (
      <PhotoTile>
        <Card>
          
          <CardBodyStyle>

            <Title>{props.title}</Title>
            <CardSubtitle>{props.date}</CardSubtitle>
            <CardImgStyle top width="80%" src={props.url} alt={props.title} />
            <Explanation>{props.explanation}</Explanation>
            <CardText>Image Credit & Copyright: {props.copyright}</CardText>

            <ButtonContainer>
                <ButtonStyle>Previous</ButtonStyle>
                <ButtonStyle>Next</ButtonStyle>
            </ButtonContainer>
            
          </CardBodyStyle>
        </Card>
      </PhotoTile>
    );
  };
export default Photo;