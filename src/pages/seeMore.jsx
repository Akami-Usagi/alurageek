import React from "react";
import styled from "styled-components"
import { accentBlue } from "../AppColors";
import { Link } from "react-router-dom";

export default function SeeMore(){

    const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const MoreDiv = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    `
    const MoreImg = styled.img`
        width: 30%;
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
            <MoreDiv>
                <MoreImg src="/img/will_left.png" alt="Will Smith"/>
                <MoreImg src="/img/more_img.svg" alt="Will Smith"/>
                <MoreImg src="/img/will_right.png" alt="Will Smith"/>
            </MoreDiv>
            <Link to="/"><BackButton>Back</BackButton></Link>
        </MainDiv>
    )
}