import React from "react";
import styled from "styled-components"
import { searchBarbackground, accentBlue } from "../AppColors";
import { FiSearch } from "react-icons/fi"


export default function Header() {

    const HeaderBox = styled.div`
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    `

    const StartDiv = styled.div`
        display: flex;
        column-gap: 10px;
    `

    const HeaderImg = styled.img`
        height: 40px;
    `

    const Searchbar = styled.div`
        width: 393px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${searchBarbackground};
        border-radius: 20px;
        padding: 0 20px;
        
    `

    const SearchInput = styled.input`
        width: 300px;
        border: none;
        background-color: transparent;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        outline: none;
        
    `

    const SearchIcon = styled(FiSearch)`
        color: #797979;
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

    return (
        <HeaderBox>
            <StartDiv>
                <HeaderImg src="/img/alurageek_logo.svg" alt="scarlet"/>
                <Searchbar>
                    <SearchInput placeholder="Que deseas buscar?"></SearchInput>
                    <SearchIcon/>
                </Searchbar>
            </StartDiv>
            
            <LoginButton>Login</LoginButton>
        </HeaderBox>
    )
}