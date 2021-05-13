import React from 'react'
import styled from 'styled-components'

const AvatarCont = styled.div`
    width: 150px;
    height: 170px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`
const AvatarImg = styled.img`
    width: 150px;
    heigh: 150px;
`

const AvatarName = styled.div`
    width: 100%;
    font-size: 1.5em;
    text-align: center;
`


const Avatar =({
    src = 'logo.svg',
    name = 'Name'
})=>
{
    return<AvatarCont>
        <AvatarImg src={src}/>
        <AvatarName>{name}</AvatarName>
    </AvatarCont>
}

export default Avatar