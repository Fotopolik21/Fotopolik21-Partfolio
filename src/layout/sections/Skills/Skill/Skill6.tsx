import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";

export const Skill6 = () => {
    return (
    <StyledSkill>  {/* web design */}
        <StyledIcon><Icon iconId={"web design"}/></StyledIcon>
        <center><SkillTitle>web design</SkillTitle></center>
        <Div>
        <SkillTxt>I haven't been in web design for a long time, but I already have experience in creating and optimizing websites and putting beauty and order on them.</SkillTxt>
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
    /* min-height: 200px; */
    max-width:31%;
    background-color: #663366ba;
    border: 1px solid #663366ba;
    border-radius: 10px;
    padding: 4px;
    margin-right: 40px;
    min-height: 40%;

    @media screen and (max-width: 500px){
        width: 32%;
        margin: 0;
        padding: 0;
        height: 530px;
        margin-right: 20px;
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
`
const SkillTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    max-width: 30%;

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