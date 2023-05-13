import React from "react";
import { styled } from "styled-components";

export default function Divider () {

    const BoxDivider = styled.div`
        width: 100%;
        height: 120px;
        background-color: gray;
        position: relative;
        z-index: 5;
        
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5rem;
        
        
    `
    const ImgDivider = styled.img`
        width: 100px;
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