import styled from "styled-components";
import { theme } from "../styels/Theme";

type SectionTitlePropsType = {
    color?: string
    maxWidth?: string
}

export const SectionTitle = styled.p<SectionTitlePropsType>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #CCCCFF;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    padding-left: 2px;
    padding-right: 2px;
    margin-top: 20px;
    margin-bottom: 8px;
    max-width: ${props => props.maxWidth || "30%"};
    position: relative;

    @media screen and (min-width: 1200px){
        &::after{
            content: "";
            position: absolute;
            width: 205px;
            height: 6px;
            background-color: ${theme.colors.colorForLiniiMain};
            bottom: -5px;
            opacity: 0.8;
            border: 0px solid #fff;
            border-radius: 20px;
            transition: .5s;
        }
    }
    @media screen and (max-width: 500px){
        &::after{
            content: "";
            position: absolute;
            width: 105px;
            height: 6px;
            background-color: ${theme.colors.colorForLiniiMain};
            bottom: -5px;
            opacity: 0.8;
            border: 0px solid #fff;
            border-radius: 20px;
            transition: .5s;
        }
    }
    :hover{
        @media screen and (min-width: 200px){
        &::after{
            content: "";
            position: absolute;
            width: 200px;
            height: 5px;
            background-color: ${theme.colors.colorForLiniiMain};
            bottom: -5px;
            opacity: 0.4;
            border: 0px solid #fff;
            border-radius: 20px;
            transition: .5s;
        }
    }
        color: ${props => props.color || "#6666b1"};
    }
`