import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts =()=>{
    return( <center>
        <StyledContacts id="Contact">
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
            <StyledField placeholder="name"/>
            <StyledField placeholder="subject"/>
            <StyledField1 placeholder="message" as={"textarea"}/>
            <Button type="submit">Send message</Button>
            </StyledForm>
        </StyledContacts> </center>
    )
}

const StyledContacts = styled.section`
    min-height: 32vh;
    background-color: #252527;
    margin-right: 4px;
    margin-left: 2px;
    flex-direction: column;
    border: 3px solid #663366ba;
    border-radius: 10px;
    margin-top: 50px;
    max-width: 550px;
    opacity: 0.9;
    /* margin: 0 auto; */

    :hover{
    border-color: #ff00ffb9;
}
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    padding-top: 10px;
`
const StyledField = styled.input`
    border: 2px solid #00c7a6;
    border-radius: 5px;
    background-color: #cc996667;
    color: wheat;
    height: 30px;
    font-weight: 600;
    padding-left: 2px;
    font-style: italic;
    text-transform: capitalize;
`
const StyledField1 = styled.input`
    border: 2px solid #0ac004;
    border-radius: 5px;
    background-color: #cc996667;
    color: wheat;
    max-width: 100%;
    min-width: 99.99%;
    min-height: 7rem;
    max-height: 7rem;
    font-size: 1.2rem;
    font-weight: 800;
    padding-left: 2px;
    font-style: oblique;
    text-transform: capitalize;
`