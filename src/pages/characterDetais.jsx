import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { accentBlue, searchBarbackground } from "../AppColors"; 

export default function CharacterDetails ({charData}){

    

const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    
`

const Title = styled.h1`
    text-align: center;
    font-size: 40px;
    font-family: 'Exo 2', sans-serif;
    color: ${accentBlue};
`

const ContentDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    column-gap: 50px;
    background-color: gray;
    padding-right: 2rem;
    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    @media(max-width: 700px){
        width: 80%;
        flex-direction: column;
        padding: initial;
    }
`

const CharImg = styled.img`
    width: 40%;
    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    @media(max-width: 1000px){
        margin-left: 2rem;
    }
    @media(max-width: 700px){
        width: 80%;
        margin: initial;
        margin-top: 2rem;
        text-align: center;
    }
`

const DescriptionDiv = styled.div`
    color: white;
    font-family: 'Exo 2', sans-serif;
    font-size: larger;
    @media(max-width: 700px){
        width: 80%;
        text-align: center;
    }
    @media(max-width: 480px){
        font-size: initial;
    }
`    

const BackButton = styled.button`
        background-color: ${accentBlue};
        border: none;
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-weight: bold;
        font-size: medium;
        transition: 300ms ease-in-out;
        border-radius: 5px;
        padding: 10px 40px;
        margin-bottom: 1rem;
        margin-top: 1rem;
        &:hover{
            background-color: white;
            color: ${accentBlue};
            border: none;
            cursor: pointer;
        }
    `

    return(
        <MainDiv>
            <Title>{charData.nombre.toUpperCase()}</Title>
            <ContentDiv>
                <CharImg src={charData.imagen} alt={charData.nombre} />
                <DescriptionDiv>
                    <h3>{charData.rol}</h3>
                    <p>{charData.backstory}</p>
                </DescriptionDiv>
            </ContentDiv>
            <Link to="/"><BackButton>Back</BackButton></Link>
        </MainDiv>
    )
}