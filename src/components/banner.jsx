import React from "react";
import styled from "styled-components"
import { accentBlue } from "../AppColors";


export default function Banner () {

    const Banner = styled.div`
        width: 100%;
        height: 400px;
        background: url("/img/scarlet.jpeg");
        filter: brightness(40%);
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1;
        display: block;
        

    `

    const ContentDiv = styled.div`
        position: fixed;
        width: 100%;
        height: 400px;
        left: 0;
        right: 0;
        z-index: 9999;
        margin-left: 9rem;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        margin-bottom: 2rem;
    `

    const LoginButton = styled.button`
        width: 182px;
        height: 51px;
        background-color: ${accentBlue};
        border: 2px solid;
        border-color: ${accentBlue};
        color: white;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: medium;
        transition: 300ms;
        &:hover{
            transition: 300ms ease-in-out;
            background-color: ${accentBlue};
            color: white;
        }
`
    const BannerTitle = styled.h1`
        color: white;
        font-weight: bolder;
        font-size: 4rem;
        margin-bottom: -0.3rem;
    `

    const BannerText = styled.h3`
        color: white;
        font-weight: 400;
        margin-bottom: 2rem;
    `

    return (
        <div>
        <Banner></Banner>
            <ContentDiv>
                <BannerTitle>Mayo Promocional</BannerTitle>
                <BannerText>Productos seleccionados con hasta el 30% de descuento</BannerText>
                <LoginButton>Ver Waifus</LoginButton>
            </ContentDiv>
        
        </div>
    )
}