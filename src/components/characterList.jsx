import React from "react";
import CharacterCard from "./characterCard";
import { styled } from "styled-components";
import {database} from "../database/database"



export default function CharacterList () {

    const CharacterDiv = styled.div`
        
        
    `

    return (
        <CharacterDiv>
            {database.map((character) => {
                return(
                    <CharacterCard nombre={character.nombre} imagen={character.img} rol={character.rol} key={character.nombre}/>
                )
                
            })}
        </CharacterDiv>
        
    )
}