import React from "react";
import styled from "styled-components"
import { searchBarbackground, accentBlue } from "../AppColors";
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom";


export default function Header() {

    const HeaderBox = styled.div`
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media (max-width: 380px){
            justify-content: center;
        }
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
        @media (max-width: 850px){
            width: 200px;
        }
        @media (max-width: 570px){
            display: none;
        }
        
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
            cursor: pointer;
        }@media (max-width: 380px){
            display: none;
        }
    `

    return (
        <HeaderBox>
            <StartDiv>
                <Link to={"/"}><HeaderImg src="/img/alurageek_logo.svg" alt="AluraGeek"/></Link>
                <Searchbar>
                    <SearchInput placeholder="Que deseas buscar?"></SearchInput>
                    <SearchIcon/>
                </Searchbar>
            </StartDiv>
            <Link to={"/login"}><LoginButton>Login</LoginButton></Link>
            
        </HeaderBox>
    )
}