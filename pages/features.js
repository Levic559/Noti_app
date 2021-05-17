import Logo from '../comps/Logo'
import Button from '../comps/Button'
import Avatar from '../comps/Avatar'
import Screen from '../comps/Screen'
import VideoUI from '../comps/VideoUI'
import PageText from '../comps/PageText'
import BigText from '../comps/BigText'
import MenuLi from '../comps/MenuLi'
import Header from '../comps/Header'
import styled from 'styled-components';

const Cont = styled.div `
  width: 100vw;
  height: 3601px;
  display: flex;
  flex-direction: column;
`

export default function Features() {
  return <Cont>


      <Header/>


      <PageText />

      <Screen imgUrl='note.png'/>
      <Screen imgUrl='todo.png'/>
  </Cont>
}