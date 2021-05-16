import React from 'react'
import styled from 'styled-components'

const ScrenCont = styled.div`
    width: 360px;
    height: 780px;
    margin-top: 130px;
    margin-bottom: 130px;
    margin-right: 20px;
    margin-left: 20px;
    background-image: url(${props=>props.imgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: solid grey 1px;
    @media (max-width: 1220px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media (max-width: 780px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }

`

const Screen =({
    imgUrl='schedule.png'
})=>
{
    return<ScrenCont imgUrl={imgUrl}/>
}

export default Screen