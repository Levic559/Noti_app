import Feature from '../comps/Feature'
import PageText from '../comps/PageText'
import Header from '../comps/Header'
import styled from 'styled-components';

const Cont = styled.div `
  width: 100vw;
  height: 3601px;
  display: flex;
  flex-direction: column;
`

const WhiteCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 100vw;
height: 878px;
`
const BlackCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color: rgb(174, 159, 175, 0.2);
border-top: 2px solid #AE9FAF;
border-bottom: 2px solid #AE9FAF;
width: 100vw;
height: 878px;
`

const Left = styled.div`
  position:relative;
  left:148px;
`

const Right = styled.div`
position:relative;
right:148px;
`

export default function Features() {
  return <Cont>


      <Header/>
      <WhiteCont>
        <Left>
          <PageText 
            titleText="Dashboard"
            bodyText="Make your choice of essential events or to-do lists for you to pin to the dashboard."
          />
        </Left>

        <Right>
          <Feature imgUrl='dashboard.png'/>
        </Right>
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
          />
        </Left>

        <Right>
          <Feature imgUrl='note.png'/>
        </Right>
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
  </Cont>
}