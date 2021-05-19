import React from 'react'
import styled from 'styled-components'

const ScrenCont = styled.div`
    width: 342px;
    height: 742px;
    margin: 50px;
    background-image: url(${props=>props.imgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: solid grey 1px;
`

const Screen =({
    imgUrl='schedule.png'
})=>
{
    return<ScrenCont imgUrl={imgUrl}/>
}

export default Screen