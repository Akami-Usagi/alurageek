import React from "react";
import styled from "styled-components"
import { accentBlue } from "../AppColors";


export default function Banner () {

    const Banner = styled.div`
        width: 100%;
        height: 500px;
        background: url("/img/nikke_banner.jpg") no-repeat;
        filter: brightness(40%);
        z-index: 1;
           

    `

    const ContentDiv = styled.div`
        position: absolute;
        top: 250px;
        z-index: 2;
        margin-left: 9rem;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;

        @media (max-width: 900px){
            margin: 2rem;
            top: 200px
        }
        
        @media (max-width: 570px){
            margin: 2rem;
            top: 170px
        }

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
            background-color: white;
            color: ${accentBlue};
            border: none;
            cursor: pointer;
        }
`
    const BannerTitle = styled.h1`
        color: white;
        font-weight: bolder;
        font-size: 4rem;
        margin-bottom: -0.3rem;
        @media (max-width: 570px){
            font-size: 3rem;
        }
    `

    const BannerText = styled.h3`
        color: white;
        font-weight: 400;
        margin-bottom: 2rem;
    `

    return (
        <section>
        <Banner></Banner>
            <ContentDiv>
                <BannerTitle>Promociones Mayo</BannerTitle>
                <BannerText>Productos seleccionados con hasta el 30% de descuento</BannerText>
                <LoginButton>Ver Ofertas</LoginButton>
            </ContentDiv>
        
        </section>
    )
}