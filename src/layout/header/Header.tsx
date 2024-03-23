import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { HM } from "./HeaderMenu/HM";
import { Logo } from "../../components/Logo/Logo";



export const Header = () => {


    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo />
                    <HM  />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #1F1F20;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 99999999999999999999999999999999999999999999999999999999999999999999999;

    @media screen and (max-width: 500px){
        display: none;
    }
`
