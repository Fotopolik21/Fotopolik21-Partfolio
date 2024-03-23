import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill1 } from "./Skill/Skill1";
import { Skill2 } from "./Skill/Skill2";
import { Skill3 } from "./Skill/Skill3";
import { Skill4 } from "./Skill/Skill4";
import { Skill5 } from "./Skill/Skill5";
import { Skill6 } from "./Skill/Skill6";

export const Skills = () => {
    return (
        <StyledSkills id="Skills"><center>
            <SectionTitle maxWidth="9%" color="">My skills</SectionTitle></center>
                <FlexWrapper wrap="wrap" justify="space-between">
                    <Skill1/>
                    <Skill2/>
                    <Skill3/>
                    <Skill4/>
                    <Skill5/>
                    <Skill6/>
                </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    /* background-color: #252527; */
    min-height: 490px;
    /* border: 3px solid #663366ba;
    border-radius: 5px; */
    padding: 5px;
    margin-bottom: 25px;
    margin-right: 4px;
    margin-left: 3px;

    :hover{
        border-color: #ff00ffb9;
    }
`