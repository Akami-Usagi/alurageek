import React from "react";
import { styled } from "styled-components";

export default function Divider () {

    const BoxDivider = styled.div`
        width: 100%;
        height: fit-content;
        padding: 20px 0;
        background-color: gray;
        position: relative;
        z-index: 5;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 7rem;
        @media (max-width: 700px){
            column-gap: 4rem;
        }
        
        
    `
    const ImgDivider = styled.img`
        width: 90px;
        @media (max-width: 700px){
            width: 65px;
        }
    `

    return (
        <BoxDivider>
            <ImgDivider src="/img/elysion.svg" alt="Elysion" />
            <ImgDivider src="/img/missilis.svg" alt="Missilis" />
            <ImgDivider src="/img/tetra.svg" alt="Tetra" />
            <ImgDivider src="/img/pilgrim.svg" alt="Pilgrim" />
       </BoxDivider>
    )
}