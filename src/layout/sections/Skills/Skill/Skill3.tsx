// import React from "react";
// import styled from "styled-components";
// import { Icon } from "../../../../components/Icon/Icon";

// export const Skill3 = () => {
//     return (
//     <StyledSkill>  {/* react */}
//         <StyledIcon><Icon iconId={"react"}/></StyledIcon>
//         <SkillTitle>react</SkillTitle>
//         <SkillTxt>And of course, most of the time I wrote in the react framework, created many websites and thumbnails, and also worked with the tsx extension.</SkillTxt>
//     </StyledSkill> 
//     );
// };

// const StyledSkill = styled.div`
//     color: #CCCCFF;
//     width: 26%;
//     margin: 5px;
//     /* min-height: 200px; */
//     max-width:31%;
//     margin-right: 40px;
//     background-color: #663366ba;
//     border: 1px solid #663366ba;
//     border-radius: 10px;
//     padding: 4px;
//     min-height: 40%;

//     :hover{
//         border-color: #ff00ffb9;
//         background-color: #663366;
//     }
// `
// const SkillTitle = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.2rem;
//     font-weight: bold;
//     cursor: pointer;

// :hover{
//     color: #6565a3;
// }
// `
// const SkillTxt = styled.div`
//     display: flex;
//     align-items: flex-end;
//     min-height: 60px;
//     font-size: 1.1rem;
//     padding-left: 15px;
//     padding-right: 15px;
//     padding-bottom: 5px;
// `
// const StyledIcon = styled.section`
//     background: transparent;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* background-color: #663366ba; */
// ` 

import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";

export const Skill3 = () => {
    return (
        <StyledSkill>  {/* react */}
            <StyledIcon><Icon iconId={"react"} /></StyledIcon>
            <div style={{ display: 'flex', justifyContent:'center' }}>
                <ListItem>
                    <SkillTitle>REACT</SkillTitle>
                    <Mask><span>REACT</span></Mask>
                    <Mask><span>REACT</span></Mask>
                </ListItem>
            </div>
            <Div>
            <SkillTxt>And of course, most of the time I wrote in the react framework, created many websites and thumbnails, and also worked with the tsx extension.</SkillTxt>
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
    font-size: 1rem;

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
    }}
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
    margin-right: 40px;
    min-height: 40%;

    @media screen and (max-width: 500px){
        width: 32%;
        margin: 0;
        padding: 0;
        height: 460px;
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
`
const SkillTitle = styled.div`
    height: 21px;
    opacity: 0;
    width: fit-content;
    font-size: 1.2rem;
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
`