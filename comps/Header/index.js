import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import MenuLi from '../MenuLi'
import Hamburger from '../hamburger'

const HeadCont = styled.div`
    width: 100%;
    height: 90px;
    display: inline-flex;
    // border: 1px solid #AE9FAF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`
const HeadLeft = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: start;
    align-items: center;
`

const HeadRight = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content:flex-end;
    align-items: center;
    @media (max-width: 780px) {
       display:none
    }

`
const HeadRight2 = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content:flex-end;
    align-items: center;
    @media (min-width: 780px) {
       display:none
    }

`

const Header =()=>
{
    return<HeadCont>
        <HeadLeft>
            <Logo/>
        </HeadLeft>
        <HeadRight>
            <MenuLi menuText='Home' menuPush='/home'/>
            <MenuLi menuText='Features' menuPush='/features'/>
            <MenuLi menuText='About Us' menuPush='/aboutUS'/>
            
        </HeadRight>
        <HeadRight2>
        <Hamburger/>
        </HeadRight2>
    </HeadCont>
}

export default Header