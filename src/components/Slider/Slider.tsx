import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Txt>Good afternoon, as you have already understood, I am a website developer. At the moment, I am actively looking for a job that is related to react & front-end.</Txt>
                    <Name>@ArtemNekrasov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={"active"}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    color: #CCCCFF;
    border: 2px solid rebeccapurple;
    border-radius: 7px;
    max-width: 500px;
    background-color: #663366ba;
    display: flex;
    flex-direction: column;
    align-items: center;

    :hover{
    border-color: #4f679cb8;
    }
`
const Slide = styled.div`
    text-align: centers;
    padding: 10px;
    background-color: #663366ba;
`
const Txt = styled.p`
    font-size: 1.2rem;
`
const Name = styled.span`
    font-weight: bold;
    font-size: larger;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 3px;
        background: #b601b6b8;
        border-radius: 20px;

        &.active{
            background-color: #ea00ff;
            width: 19px;
        }
    }
`