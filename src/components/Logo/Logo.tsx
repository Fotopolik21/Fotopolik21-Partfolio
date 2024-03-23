import React, { FC, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Logo = (): JSX.Element => {
    return (
        <StyledLink href="">
            <Icon hight={"47px"} width={"65px"} iconId={'header'}/>
        </StyledLink>
    )
};

const StyledLink = styled.a`
    margin-top: 4px;
`