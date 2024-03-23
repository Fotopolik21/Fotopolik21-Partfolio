import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";

export const Skill5 = () => {
    return (
    <StyledSkill>  {/* styled components */}
        <StyledIcon><Icon iconId={"styled components"}/></StyledIcon>
        <center><SkillTitle>styled components</SkillTitle></center>
        <Div>
        <SkillTxt>I know how to connect and work with styled components, because without it, beautiful styling would not be possible (as on my website).</SkillTxt>
        </Div>
    </StyledSkill> 
    );
};
const Div = styled.div`
    text-align: center;
    display: flex;
`
const StyledSkill = styled.div`
    color: #CCCCFF;
    width: 26%;
    margin: 5px;
    background-color: #663366ba;
    border: 1px solid #663366ba;
    border-radius: 10px;
    padding: 4px; 
    /* min-height: 200px; */
    max-width:31%;
    min-height: 40%;
    /* max-height: 31vh; */
    position: relative;

    @media screen and (max-width: 500px){
        width: 39%;
        margin: 0;
        padding: 0;
        height: 530px;
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
    }}
    @media screen and (min-width: 1400px) and (max-width: 2000px){
        &::before{
        content: "|";
        display: inline-block;
        position: absolute;
        top: 9vh;
        left: -85px;
    }
        &::after{
        content: "|";
        display: inline-block;
        position: absolute;
        right: -85px;
        bottom: 9vh;
        }
    }
`
const SkillTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    max-width: 48%;

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
    padding-bottom: 5px;
`
const StyledIcon = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`