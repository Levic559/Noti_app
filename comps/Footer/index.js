import React from 'react'
import styled from 'styled-components'

const FootCont = styled.div`
    width: 100%;
    height: 200px;
    display: inline-flex;
    background: #FFF;
    color: grey;
    box-shadow: -2px 0px 2px rgba(0, 0, 0, 0.25);
    justify-content:center;
    @media (max-width: 780px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
    };
`
const FootLeft = styled.div`
  width: 40%;
  display:flex;
  justify-content: center;
  p{
      margin: 40px 10px;
  }
  @media (max-width: 780px)
    {
        width: 80%;
        p{
            margin: 10px;
        }
    };
`

const FootRight = styled.div`
  width: 40%;
  display:flex;
  justify-content: center;
  p{
    margin: 40px 10px;
    }
  @media (max-width: 780px)
    {
        width: 80%;
        p{
            margin: 10px;
        }
    };
`

const Footer =()=>
{
    return<FootCont>
        <FootLeft>
            <p>DEVELOPER:</p>
            <p>BCIT D3  Group 8</p>
        </FootLeft>
        <FootRight>
            <p>CONTACT:</p>
            <p>Telephone:  604-434-5734<br/>Email:  group8@bcit.ca</p>
        </FootRight>
    </FootCont>
}

export default Footer