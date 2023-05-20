import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { accentBlue } from "../AppColors";
import { searchBarbackground } from "../AppColors";
import { useNavigate } from "react-router-dom";

const BoxDiv = styled.div`
        width: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
const FormDiv = styled.div`
    position: absolute;
    bottom: 280px;
    width: 400px;
    height: 300px;
    border-radius: 20px;
    background-color: ${searchBarbackground};
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 450px){
        width: 90%;
    }
`
const LoginForm = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;    
    align-items: center ;
`
const FormLabel = styled.label`
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    font-weight: bolder;
    font-size: 1.3rem;
    color: ${accentBlue};

`
const FormInput = styled.input`
    width: 90%;
    border: none;
    padding: 10px 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 700;
`
const FormButton = styled.button`
    width: 200px;
    padding: 10px 0;
    margin-top: 20px;
    border: none;
    background-color: ${accentBlue};
    color: white;
    font-family: "Exo 2", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 10px;
    transition: 400ms ease-in-out;
    &:hover{
        background-color: white;
        color: ${accentBlue};
        cursor: pointer;
    }
    
`
const FormBack = styled.div`
    width: 100%;
    height: 700px;
    background: url("/img/nikke_banner.jpg") no-repeat;
    background-size: cover;
    filter: brightness(40%);
`
const FormHint = styled.img`
    width: 100px;
    position: fixed;
    bottom: 120px;
    right: 25px;
`

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    return(
        <BoxDiv>
            <FormBack></FormBack>
            <FormDiv>
                <LoginForm action="submit" onSubmit={(event) => {
                    event.preventDefault()
                    if (email === "admin@admin.com" && password === "admin"){
                        alert("Bienvenido")
                        navigate("/")
                    }else{
                        alert("Email o contraseña incorrectos")
                    }
                }}>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                    <FormLabel>Contraseña</FormLabel>
                    <FormInput type="password" value={password} placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)}/>
                    <FormButton type="submit">Inicia Sesion</FormButton>
                </LoginForm>
            </FormDiv>
            <FormHint src="/img/question.svg" onClick={() => alert("Prueba con admin@admin.com y admin")}/>
        </BoxDiv>
    )
}