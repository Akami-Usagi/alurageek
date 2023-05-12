import React from "react";
import styled from "styled-components"
import { accentBlue } from "../AppColors";


export default function Banner () {

    const Banner = styled.div`
        display: flex;
        flex-direction: column;
        align-items: baseline;
        width: 100%;
        height: 500px;
        background: url("/img/scarlet.jpeg");
        
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
       


    `

    const LoginButton = styled.button`
        width: 182px;
        height: 51px;
        background-color: transparent;
        border: 2px solid;
        border-color: ${accentBlue};
        color: ${accentBlue};
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
        color: red;
    `

    return (
        <Banner>
            <BannerTitle>Mayo Promocional</BannerTitle>
            <h3>Productos seleccionados con hasta el 30% de descuento</h3>
            <LoginButton>Ver Waifus</LoginButton>
        </Banner>
    )
}