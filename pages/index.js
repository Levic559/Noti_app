import Logo from '../comps/Logo'
import Button from '../comps/Button'
import Avatar from '../comps/Avatar'
import Screen from '../comps/Screen'
import VideoUI from '../comps/VideoUI'
import PageText from '../comps/PageText'
import BigText from '../comps/BigText'
import MenuLi from '../comps/MenuLi'

export default function Home() {
  return <div>
      <h3>This is Noti Promot Web</h3>
      <br/>
      <Logo />
      <BigText bigText='Construction site!' bigBody='Right now it is for components test'/>
      <br/>
      <MenuLi /><MenuLi menuText='Test' menuPush='/test'/>
      <VideoUI />
      <PageText />
      <Button/>
      <Button bgcolor='#EB5DFF' btnText='Test' BtnPush='/test' />
      <Avatar src='head_icons_adrian.svg' name='Adrian'/>
      <Avatar src='head_icons_levi.svg' name='Levi'/>
      <Avatar src='head_icons_warren.svg' name='Warren'/>
      <Screen/>
      <Screen imgUrl='note.png'/>
      <Screen imgUrl='todo.png'/>
    </div>
}
