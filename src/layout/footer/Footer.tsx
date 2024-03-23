import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";

export const Footer = () => {
    return (<center id="footer">
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Div>
                    <Name>Artem</Name>
                    <SocialIconsList>
                        <SocialItem>
                            <SocialLink>
                                <a href="https://en.wikipedia.org/wiki/Instagram#Trends" target="table"><Icon hight={"17px"} width={"17px"} viewBox={"0 0 21 21"} iconId={"inst"}></Icon></a>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <a href="https://t.me/telegram" target="table"><Icon hight={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"tg"} /></a>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <a href="https://vk.com/feed" target="table"><Icon hight={"25px"} width={"25px"} viewBox={"0 0 21 21"} iconId={"vk"} /></a>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <a href="https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe15%2F914304_654333934630135_973583261_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D107%26_nc_ohc%3DqDfTBeLF5w8AX9KGB7_%26edm%3DABfd0MgBAAAA%26ccb%3D7-4%26oh%3D53e98a0faff87fcfa35e8fb04b69e42b%26oe%3D60B949B4%26_nc_sid%3D7bff83&text=у+меня+нет+инсты&rpt=simage&lr=213" target="table"><Icon hight={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"in"} /></a>
                            </SocialLink>
                        </SocialItem>
                    </SocialIconsList>
                </Div>
                <Copyright>© 2024 ArtemNekrasov, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter> </center>
    )
}

const StyledFooter = styled.footer`
    min-height: 20vh;
    /* background-color: #252527; */
    padding-top: 15px;
    max-width: 80%;
    /* border-radius: 20px;
    background-image: url(https://i.pinimg.com/originals/2d/21/3d/2d213d36f66c318754bd4b78ab9361f1.jpg); */
`
const Name = styled.span`
    max-width: 290px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 5px;
    margin: 0 auto;
    padding-top: 10px;
    color: aliceblue;
    font-weight: bolder;
`
const SocialIconsList = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 8px;
    margin-bottom: 5px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.span`
    max-width: 290px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    padding-top: 10px;
    font-size: small;
    margin-top: 45px;
`
const Div = styled.div`
    background-color: #663366ba;
    border: 0px solid gainsboro;
    border-radius: 15px;
`