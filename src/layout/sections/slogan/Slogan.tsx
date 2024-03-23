import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan =() => {
    return(
        <StyledSlogan>
            <center><SectionTitle maxWidth="28%">I Am Available For Freelance</SectionTitle></center>
            <Div><Button>Hire me</Button></Div>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 20vh;
    /* background-color: #252527; */
    flex-direction: column;
    /* border: 3px solid #663366ba;
    border-radius: 5px; */
    margin-right: 4px;
    margin-left: 2px;
    margin-top: 20px;
/* 
    :hover{
    border-color: #ff00ffb9;
    } */
`
const Div = styled.div`
    max-width: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    padding-top: 10px;
`