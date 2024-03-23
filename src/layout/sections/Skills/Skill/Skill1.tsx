import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";

export const Skill1 = () => {
    return (
        <StyledSkill>  {/* HTML */}
            <StyledIcon><Icon iconId={"code"} /></StyledIcon>
            <div style={{ display: 'flex', justifyContent:'center' }}>
                <ListItem>
                    <SkillTitle>HTML5</SkillTitle>
                    <Mask><span>HTML5</span></Mask>
                    <Mask><span>HTML5</span></Mask>
                </ListItem>
            </div>
            <Div>
            <SkillTxt>I have experience working with HTML5. I have created both single projects and multi-structured ones.</SkillTxt>
            </Div>
        </StyledSkill>
    );
};
const Div = styled.div`
    text-align: center;
    display: flex;
`
export const Mask = styled.span`
font-family: 'Poppins',sans-serif;
font-weight: 900;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;

    @media screen and (max-width: 1199px){
        min-width: 40%;
    }

    & + & {
            top: 50%;
            span {
            transform: translateY(-50%);
            display: inline-block;
        }
    }
`
const ListItem = styled.div`
    position: relative;
    width: fit-content;
    cursor: pointer;

    &::before{
        content: "";
        display: inline-block;
        height: 2px;
        background-color: #45026b;
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }
    @media screen and (min-width: 1200px){
        &:hover{
        &::before{
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translateX(3px);
            color: #c2b0cc;
        & + ${Mask} {
            transform: skewX(12deg) translateX(-1px);
        }
        }
    }
    }
`

const StyledSkill = styled.div`

    /* display: flex;
    justify-content: center; */
    color: #CCCCFF;
    width: 26%;
    background-color: #663366ba;
    border: 1px solid #663366ba;
    border-radius: 10px;
    padding: 4px;
    margin: 5px;
    /* min-height: 200px; */
    max-width:31%;
    margin-left: 40px;
    min-height: 40%;

    @media screen and (max-width: 500px){
        width: 32%;
        margin: 0;
        padding: 0;
        height: 390px;
        margin-left: 20px;
        margin-bottom: 10px;
    }

    :hover{
        border-color: #ff00ffb9;
        background-color: #663366;
    }

    @media screen and (min-width: 1200px){
    filter: blur(1.5px);
    transition: .6s;
    :hover{
        filter: blur(0px);
        transition: .6s;
    }
    }
`
const SkillTitle = styled.div`
    height: 22px;
    opacity: 0;
    width: fit-content;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;

:hover{
    color: #6565a3;
}
`
const SkillTxt = styled.div`
    display: flex;
    align-items: flex-end;
    min-height: 60px;
    font-size: 1.1rem;
    padding-left: 15px;
    padding-right: 15px;
`
const StyledIcon = styled.section`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #663366ba; */
    position: relative;

    @media screen and (min-width: 1200px){
    &::after{
        content: "";
        position: absolute;
        width: 55px;
        height: 55px;
        background-color: #ff000013;
        z-index: -1;
        top: -2px;
        transform: rotate(135deg);
        border: 0px solid #fff;
        border-radius: 200px;
    }}
`