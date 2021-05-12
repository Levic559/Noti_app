import React from 'react'
import styled from 'styled-components'


const ButtonCont = styled.div `
    width: 210px;
    height: 40px;
    margin: 10px;
    color: white;
    background: ${props=>props.bgcolor};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: inline-flex;
    justify-content: center; 
    align-items: center;
`

const ButtonText = styled.h3 `
    font-family: sans-serif;
    text-align: center;
    align-items: center;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`

const Button =({
    bgcolor = '#71E4B9',
    btnText = 'Button'
})=>
{
    return<ButtonCont bgcolor={bgcolor}>
        <ButtonText>{btnText}</ButtonText>
    </ButtonCont>
}

export default Button