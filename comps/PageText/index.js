import React from 'react'
import styled from 'styled-components'


const TextCont = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const TextTitle = styled.div`
    font-size: 4.5em; 
    font-weight: bold;
    line-height: 1.5em;
    text-align: ${props=>props.textAlign};
`

const TextPara = styled.p`
    font-size: 1.5em;
    text-align: ${props=>props.textAlign};
`


const PageText =({
    titleText = 'Title',
    bodyText = 'Body',
    textAlign = 'left'
})=>
{
    return<TextCont>
        <TextTitle textAlign={textAlign}>{titleText}</TextTitle>
        <TextPara textAlign={textAlign}>{bodyText}</TextPara>
    </TextCont>
}

export default PageText