import React from "react";
import styled from "styled-components";

type WorkStylePropsType = {
    title: string
    text: string
    src: string
    href: string
    href2: string
    color: string
}

export const Work = (props: WorkStylePropsType) => {
    return (
        <WorkStyle>
        <Div>
            <B><a href="view"></a></B>
            <PhotoWrapper><Img src={props.src}/></PhotoWrapper>
            <Title color={props.color}>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={props.href} target="table">Demo</Link>
            <Link href={props.href2} target="table">Code</Link>
        </Div>
        </WorkStyle>
    );
};

const B = styled.button`
    transform: translateY(50px);
    margin: 0 auto;
    z-index: 222;
`
const PhotoWrapper = styled.div`
    position: relative;
    transition: .6s;
    border: 0px solid #fff;
    border-radius: 15px;

    @media screen and (min-width: 200px){
        transform: translateY(-20px);
    }

    :hover{
    &::before{
        content: "";
        position: absolute;
        top: 0;
        bottom:0;
        left:0;
        right:0;
        background-color: rgba(0,0,0,0.3);
        backdrop-filter: blur(4px);
        z-index: 1;
        transition: .6s;
        border: 0px solid #fff;
        border-radius: 5px;
    }}
`
const WorkStyle = styled.div`
    background-color: #663366;
    max-width: 540px;
    width: 100%;
    min-height: 470px;
    max-height: 451px;
    color: #CCCCFF;
    border: 2px solid #ccccff7a;
    border-radius: 10px;
    max-height: inherit;
    box-sizing:border-box;
    margin: 5px;
    margin-right: 10px;
    position: relative;
    opacity: 0.9;
`
const Div = styled.div`
    @media screen and (max-width: 500px){
        height: 470px;   
    }
`
const Img = styled.img`
    width:100%;
    height: 260px;
    max-height: inherit;
    box-sizing:border-box;
    border-top: 0px solid wheat;
    border-right: 0px solid wheat;
    border-left: 0px solid wheat;
    border-radius: 10px;
    z-index: -1;

    @media screen and (max-width: 500px){
        height: 150px;
    }
`
const Title = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.7rem;
    padding: 8px;
    @media screen and (max-width:500px){
        padding: 0;
        margin: 0;
    }
    margin-top: 1px;
    margin-bottom:20px;
    cursor: pointer;
    transition: 0.2s;
    /* transform: translateY(50px); */

    :hover{
        color: ${props => props.color || "#6565a3"};
        /* transform: translateY(0); */
    }
`
const Text = styled.p`
    padding: 12px;
    font-size: 1.2rem;
    /* transition: 0.2s;
    transform: translateY(-20px);
    opacity: 0; */

    :hover{
        /* transform: translateY(0);
        opacity: 1; */
    }
`
const Link = styled.a`
    padding: 8px;
    display: flex;
    align-items: flex-end;
    display: inline;
    padding: 3px;
    text-decoration: none;
    color: #bddffd;
    font-weight: 700;
    /* border-bottom: 3px solid #111111; */
    padding-bottom: 1px;
    border-radius: 8px; 
    margin-left: 5px;
    margin-right: 2px;
    /* background-color: #4721471f; */
    background-color: #30172c11;
    padding-right: 7px;
    border: 1.5px solid #1b081b11;
    position: relative;
    z-index: 1;

    :hover{
        filter: brightness(70%);
    }
    :active{
        border: 2.5px solid #1b081b11;
    }
    &::after{
        content: "";
        position: absolute;
        display: inline-block;
        height: 5px;
        width: 45px;
        background-color: #2fc0c06d;
        top: 20px;
        left: 2px;
        border: 0px solid #FFf;
        border-radius: 5px;
        z-index: -1;
    }
`