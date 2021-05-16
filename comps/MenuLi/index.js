import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'


const MenuBtn = styled.button`
    height: 40px;
    margin: 10px;
    border: none;
    font-size: 24px;
    background-color: white;
    
    @media (max-width: 1220px) {
        font-size:20px;
    }
    @media (max-width: 780px) {
        font-size:16px;
    }
`

const MenuLi =({
    menuText = 'Default Menu List',
    menuPush = '/'
})=>
{
    const MenuRouter = useRouter()

    return<MenuBtn onClick={()=>MenuRouter.push(menuPush)}>{menuText}</MenuBtn>

}

export default MenuLi