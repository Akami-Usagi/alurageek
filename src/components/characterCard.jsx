import React from "react";

import { styled } from "styled-components";
import { accentBlue } from "../AppColors";

export default function CharacterCard({imagen, nombre, rol}){
    
    

    const CharacterBox = styled.div`
        display: flex;
        width: 400px;
        height: 280px;
        background-color: gray;
        border-radius: 15px;
        box-shadow: 10px 10px 15px rgba(0,0,0, 0.5);

    `
    const CharacterImg = styled.img`
        width: 200px;

    `

    const CharacterInfo = styled.div`
        margin-left: 20px;
    `

    const DetailsButton = styled.button`
        width: 100px;
        
        background-color: ${accentBlue};
        border: 2px solid;
        border-color: ${accentBlue};
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-weight: bold;
        font-size: medium;
        transition: 300ms;
        &:hover{
            transition: 300ms ease-in-out;
            background-color: white;
            color: ${accentBlue};
            border: none;
            cursor: pointer;
        }
    `

    const CharacterTitle = styled.h3`
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-size: 1.5rem;
        
    `

    const CharacterText = styled.p`
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-weight: bold;
    `

    return (
        
        <CharacterBox>
            <CharacterImg src={imagen} alt={nombre} />
            <CharacterInfo>
                <CharacterTitle>{nombre}</CharacterTitle>
                <CharacterText>{rol}</CharacterText>
                <DetailsButton>Detalles</DetailsButton>
            </CharacterInfo>
        </CharacterBox>
    )
}