import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon/Icon";
import { Slider } from "../../../components/Slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";

export const Testimony=()=>{
    return( <center>
        <StyledTestimony id="Testimony">
            <center><SectionTitle maxWidth="10%" color=''>Testimony</SectionTitle></center>
            <FlexWrapper direction={"column"} align={"center"}>
            <Icon iconId="quotation marks"/>
            <Slider />
            </FlexWrapper>
        </StyledTestimony> </center>
    )
}

const StyledTestimony = styled.section`
    background-color: #252527;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    border: 3px solid #663366ba;
    border-radius: 10px;
    margin-right: 4px;
    margin-left: 2px;
    margin-top: 60px;
    min-height: 350px;
    max-width: 35%;
    opacity: 0.9;

    @media screen and (max-width: 500px){
        min-width: 70%;
    }

    :hover{
    border-color: #ff00ffb9;
    }
`