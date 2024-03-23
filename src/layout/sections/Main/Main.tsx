import React from "react";
import styled from "styled-components";
import photo from '../../../assets/img/ccf521ba-241b-4930-b6bf-cec6684a98f6.webp'
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styels/Theme";

export const Main = () => {
    return (
        <SttledMain id="Home">
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
                {/* <Span1>:)</Span1> */}
                <Pashalka>:)</Pashalka>
                <StyledDiv>
                    <Span>Hi There</Span>
                    <Name>I'm <span></span><Divik><Em>Artem Nekrasov</Em></Divik></Name>
                    <MainTitle>A Web Developer.<A>|</A></MainTitle>
                </StyledDiv>
                <PhotoWrapper>
                <Photo src={photo}/>
                </PhotoWrapper>
                {/* <DivPhone><Span2>Hi There</Span2></DivPhone> */}
            </FlexWrapper>
            </Container>
            <center><DivPhone><Span2>Hi There</Span2><Name2>I'm <Em>Artem Nekrasov</Em></Name2><MainTitle2>A Web Developer.<A>|</A></MainTitle2></DivPhone></center>
        </SttledMain>
    );
};
const MainTitle2 = styled.div`
    color: #9090ff;
    font-weight: bold;
`
const Name2 = styled.span`
    font-size: 1.4rem;
    color: #aeaefc;
`
const Span2 = styled.h3`
    font-size: 1.5rem;
    color: #bcbcfc;
    font-weight: 800px;
    margin-top: 20px;
`
const DivPhone = styled.div`
    @media screen and (max-width: 500px){
        display: inline-block;
        flex-direction: column;
        border: 0px solid #fff;
        background-color: #2e355f81;
        border-radius: 20px;
        padding-top: 0px;
        height: 120px;
        width: 250px;
    }
    @media screen and (min-width: 500px){
        display: none;
    }
`
const SttledMain = styled.div`
    /* background-color: #252527; */
    min-height: 60vh;

    /* @media screen and (max-width: 500px){
        max-width: 50%;
    } */
`
const Divik = styled.span`
    color: transparent;
    background-image: linear-gradient(180deg, #926df8 40%, #49ff67 80%);
    -webkit-background-clip: text;
`

const PhotoWrapper = styled.div`
position: relative;
@media screen and (min-width: 1200px){
    &::after{
        content: " ";
        position: absolute;
        opacity: 0.8;
        background-color: #0000001c;
        border: 2px solid #ff00ffb9;
        border-radius: 15px;
        right: -30px;
        top: 120px;
        width: 350px;
        height: 430px;
        display: block;
        background-size: 10px 20px;
        z-index: 0;
    }}
    /* @media screen and (max-width: 500px){
    &::after{
        content: "HI THERE! I'm Artem Nekrasov";
        position: absolute;
        bottom: -55px;
        left: 90px;
        color: #ad4aad;
    }
    }
    @media screen and (min-width: 500px){
        display: none;
    } */
`
const Photo = styled.img`
    width:350px;
    height: 430px;
    object-fit: cover;
    margin-top: 10vh;
    border: 2.5px solid #663366ba;
    border-radius: 15px;
    cursor: copy;
    transition: .6s;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 500px){
        width: 30vh;
        height: 40vh;
        margin-right: none;
        margin-top: 5vh;
    }

    :hover{
        border-color: #ff00ffb9;
        filter: hue-rotate(30deg);
        transition: .6s;
    }
`
// const Span1 = styled.div`
//     margin: 0;
//     padding: 0;
//     transform: translateX(500px);
//     color: transparent;

//     :hover{
//         color: aliceblue;
//     }
// `
const Pashalka = styled.div`
@media screen and (min-width: 1400px){
    position: absolute;
    left: 27%;
    width: 30px;
    height: 30px;
    background-color: #5f17a1;
    border: 0px solid #5f17a1;
    border-radius: 10px;
    opacity: 0.5;
    padding-left: 10px;
    padding-top: 2.5px;}
    @media screen and (max-width: 500px){
        display: none;
    }
`
const MainTitle = styled.h1`
    color: #CCCCFF;
    font-size: 1.3rem;
    cursor: copy;
    padding-bottom: 5px;
    padding-left: 2px;
`
const Name = styled.h2`
    /* color: #CCCCFF; */
    font-size: 2rem;
    margin-top: 1px;
    margin-bottom: 15px;
    cursor: copy;
    position: relative;

    @media screen and (min-width: 1200px){
    span{
        &::after{
            content: "";
            display:block;
            width: 240px;
            height: 10px;
            background-color: ${theme.colors.colorForLiniiMain};
            z-index: -1;
            top: 32px;
            left: 60px;
            position: absolute;
            border: 0px solid #fff;
            border-radius: 20px;
            opacity: 0.2;
        }
    }}
`
const Span = styled.span`
    color: #CCCCFF;
    margin-left: 5px;
    cursor: copy;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const StyledDiv = styled.div`
    border: 2px solid #FFCCFF;
    border-radius: 20px;
    background-color: #663366;
    padding-top: 5px;
    padding-left: 5px;
    opacity: unset;
    padding-right: 50px;
    box-shadow: 0px 0px 25px #7B68EE inset;
    /* border-color: #FFCCFF; */
    transition: .8s;
    transform: translateX(-80px);
    z-index: 9;

    @media screen and (max-width: 500px){
        display: none;
    }

    @media screen and (min-width: 1400px) {
        :hover{
            border-color: #ff00ffb9;
            background-color: #663366;
            transform: translateX(-50%);
            transition: .8s;
            opacity: unset;
    }
    }
`
const A = styled.span`
    color: #ccccff65;
`
const Em = styled.em`
    font-weight: bold;
    z-index: 2;
    /* color: aliceblue; */
`