import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const LogoCont = styled.div `
    width: 187px;
    height: 55px;
    margin: 20px;
`

const Logo =({
    logoUrl='logo.svg'
})=>
{
    const LogoRouter = useRouter()

    return<LogoCont onClick={()=> LogoRouter.push('/')}>
        <img src={logoUrl}/>
    </LogoCont>
}

export default Logo