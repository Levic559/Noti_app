import React from 'react'
import styled from 'styled-components'


const BigCont = styled.div`
    width: 100wv;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding:0;
    align-items:center;
    
`
const BigTitle = styled.div`
    font-size: 6em; 
    font-weight: bold;
    justify-content:center;
    align-items:center;
    text-align: ${props=>props.bigAlign};
    padding:0;
    margin:0 ;
    @media (max-width: 1220px) {
        font-size: 5em; 
    }
    @media (max-width: 780px) {
        font-size: 3.5em; 
    }
`

const BigPara = styled.div`
    font-size:  ${props=>props.fontSize};
    text-align: ${props=>props.bigAlign};
    width:525px;
    @media (max-width: 1220px) {
        font-size: 1.5em; 
        width:500px;
    }
    @media (max-width: 780px) {
        font-size: 1em;
        width:325px;
    }
    
`


const BigText =({
    bigText = 'Big Title',
    bigBody = 'Big Body',
    bigAlign = 'center',
    fontSize='1.5em',
})=>
{
    return<BigCont>
        <BigTitle bigAlign={bigAlign}>{bigText} </BigTitle>
        <BigPara bigAlign={bigAlign}  fontSize={fontSize}>{bigBody}</BigPara>
    </BigCont>
}

export default BigText