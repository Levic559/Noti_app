import React from 'react'
import styled from 'styled-components'


const BigCont = styled.div`
    width: 70%;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const BigTitle = styled.div`
    font-size: 6em; 
    font-weight: bold;
    line-height: 1.5em;
    text-align: ${props=>props.bigAlign};
`

const BigPara = styled.p`
    font-size: 1.75em;
    text-align: ${props=>props.bigAlign};
`


const BigText =({
    bigText = 'Big Title',
    bigBody = 'Big Body',
    bigAlign = 'Center'
})=>
{
    return<BigCont>
        <BigTitle bigAlign={bigAlign}>{bigText}</BigTitle>
        <BigPara bigAlign={bigAlign}>{bigBody}</BigPara>
    </BigCont>
}

export default BigText