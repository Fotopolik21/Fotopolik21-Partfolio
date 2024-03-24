import React from "react";
import styled from "styled-components";
import "./Text-aria.css"

export const TextAria = () => {
    <TextAriaStyles>
        <input type="text" id="txtfild"/>
        <Label htmlFor="txtfild">Some text</Label>
    </TextAriaStyles>
}

const TextAriaStyles = styled.div`
    position: relative;
`
const Label = styled.label`
    position: absolute;
    left: 0;
`