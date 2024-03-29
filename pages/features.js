import Feature from '../comps/Feature'
import PageText from '../comps/PageText'
import Button from "../comps/Button";
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import styled from 'styled-components';

const Cont = styled.div `
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const WhiteCont = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 100%;

@media (max-width: 780px)
{
  flex-direction: column;
}
`
const BlackCont = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: rgb(174, 159, 175, 0.2);
border-top: 2px solid #AE9FAF;
border-bottom: 2px solid #AE9FAF;
width: 100%;

@media (max-width: 780px)
{
  flex-direction: column;
};

`

const Left = styled.div`
  width: 40%;
  display:flex;
  justify-content: center;
  order: 2;
  @media (max-width: 780px)
{
  width: 80%;
  order: 2;
};
`

const Right = styled.div`
  width: 40%;
  display:flex;
  justify-content: center;
  order: 2;
  @media (max-width: 780px)
{
  width: 80%;
  order: 1;
};
`

export default function Features() {
  return <Cont>


      <Header/>
      <WhiteCont>
        <Left>
          <PageText 
            titleText="Dashboard"
            bodyText="Make your choice of essential events or to-do lists for you to pin to the dashboard."
            textAlign = 'right'
          />
        </Left>

        <Left>
          <Feature imgUrl='dashboard.png'/>
        </Left>
      </WhiteCont>

      <BlackCont>
        <Left>
          <Feature imgUrl="schedule.png"/>
        </Left>

        <Right>
          <PageText
            titleText="Schedule"
            bodyText="Add events to dates, as well as add lists, notes and reminders for your convenience. "
          />
        </Right>
      </BlackCont>

      <WhiteCont>
        <Left>
          <PageText 
            titleText="Notes"
            bodyText="Jot down on-the-go thoughts or take time for more detailed entries."
            textAlign = 'right'
          />
        </Left>

        <Left>
          <Feature imgUrl='note.png'/>
        </Left>
      </WhiteCont>

      <BlackCont>
        <Left>
          <Feature imgUrl="todo.png"/>
        </Left>

        <Right>
          <PageText
            titleText="To-Do Lists"
            bodyText="An essential for any productivity app.  "
          />
        </Right>
      </BlackCont>

      <WhiteCont>
          <Button btnText='Download' bgcolor="#EB5DFF" BtnPush='/'/>
      </WhiteCont>
      <Footer/>

  </Cont>
}