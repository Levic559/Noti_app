import React from 'react'
import styled from 'styled-components'

const ContactCont = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    background: #FFF;
    margin: 50px;
    border-radius: 10px;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 780px)
    {
      width: 90%;
    };
`
const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: grey;

    input{
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[name=Message]{
        height: 120px;

    }
`


const Contact =()=>
{
    return<ContactCont>
        <ContactForm>
            <h3>Write to us</h3>
            <label>Your name</label>
            <input type='text' name='Yname' placeholder='Your name...'></input>
            <label>Your email</label>
            <input type='email' name='Yemail' placeholder='Your email...'></input>
            <label>Subject</label>
            <input type='text' name='Subject' placeholder='Subject...'></input>
            <label>Your message</label>
            <input type='text' name='Message'></input>
            <input type='submit' value='Submit' />
        </ContactForm>

    </ContactCont>
}

export default Contact