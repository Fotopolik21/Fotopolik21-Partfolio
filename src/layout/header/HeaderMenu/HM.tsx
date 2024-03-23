import styled from "styled-components";
import { theme } from "../../../styels/Theme";
const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const HM = () => {

    const onClick = (item: string) => {
        const elementToShow = document.querySelector(`#${item}`)
        if (elementToShow) {
        //     const {y: TopElement} = elementToShow.getBoundingClientRect()
        //     window.scrollTo({
        //     top: TopElement - 80
        // })
        console.log(elementToShow.getBoundingClientRect())
        elementToShow.scrollIntoView({
            behavior:'smooth',
            block:'center',
        })
        }
    }

    return (
        <StyledHM>
            <ul>
                {items.map((items: string, index: number ) => {
                    return (
                    <ListItem key={index}>
                        <LinkHOME href={`#${items}`} onClick={(event: { preventDefault: () => void; }) => {
                            event.preventDefault()
                            onClick(items)
                        }}
                        >{items}
                            <Mask><span>{items}</span></Mask>
                            <Mask><span>{items}</span></Mask>
                        </LinkHOME>
                        {/* <LinkSkills href={"Skills"}
                        >{items}
                            <Mask><span>{items}</span></Mask>
                            <Mask><span>{items}</span></Mask>
                        </LinkSkills> */}
                    </ListItem>)
                })}
            </ul>
        </StyledHM>
    );
};
const LinkSkills = styled.a`

`
const StyledHM = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 2px;
    }
`
const LinkHOME = styled.a`
    text-decoration: none;
    /* color: wheat; */
    color: #593594;
    font-weight: 500;
    font-family: 'Josefin Sans', sans-serif;
    font-style: normal;
    font-size: 30px;
    text-align: center;
`
export const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    /* outline: 1px solid hsl(0, 38.46153846153844%, 71.96078431372548%); */
    color: ${theme.colors.font2};

    & + & {
            top: 50%;
            span {
            transform: translateY(-50%);
            display: inline-block;
        }
    }
`
const ListItem = styled.li`
    position: relative;

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
    }
`