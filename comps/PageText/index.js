import React from 'react'
import styled from 'styled-components'


const TextCont = styled.div`
    max-width: 500px;
    // height: 200px;
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const TextTitle = styled.div`
    font-size: 4em; 
    font-weight: bold;
    line-height: 1.5em;
    text-align: ${props=>props.textAlign};
    @media (max-width: 780px)
    {
      text-align: center;
    };

`

const TextPara = styled.p`
    font-size: 1.5em;
    text-align: ${props=>props.textAlign};
    @media (max-width: 780px)
    {
      text-align: center;
    };
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