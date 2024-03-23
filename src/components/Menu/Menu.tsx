import React from "react";
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((itemsH: string, index: number) => {
                    return (<li key={index}><A href="">{itemsH}</A></li>)
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 2px;
    }
`
const A = styled.a`
    text-decoration: none;
    color: wheat;
    font-weight: 700;
`