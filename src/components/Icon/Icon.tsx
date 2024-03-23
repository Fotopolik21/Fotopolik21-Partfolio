import React from "react";
import styled from "styled-components";
import iconsSprite from '../../assets/img/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    hight?: string
    viewBox?: string
}

export const Icon = (props:IconPropsType) => {
    return (
        <IconStyle>
        <svg width={props.width || "50"} height={props.hight || "50"} viewBox={props.width || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
        </IconStyle>
    );
};

const IconStyle = styled.object`
    /* background-color: #663366;
    border: 2px solid pink;
    border-radius: 5px; */
    margin-bottom: 2px;
`