import React from "react";
import CharacterCard from "./characterCard";
import { styled } from "styled-components";
import {database} from "../database/database"



export default function CharacterList ({setCharData}) {

    const CharacterDiv = styled.div`
        margin: 50px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        
    `

    return (
        <CharacterDiv>
            {database.map((character) => {
                return(
                    <CharacterCard nombre={character.nombre} imagen={character.img} rol={character.rol} key={character.nombre} backstory={character.backstory} setCharData={setCharData}/>
                )
                
            })}
        </CharacterDiv>
        
    )
}