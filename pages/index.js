import Logo from '../comps/Logo'
import Button from '../comps/Button'
import Avatar from '../comps/Avatar'
import Screen from '../comps/Screen'
<<<<<<< HEAD
// import Video from '../comps/Video'
=======
// import VideoUI from '../comps/VideoUI'
>>>>>>> 209d0e969f31c787ff51fa68a2bbc0db33ae1619
import PageText from '../comps/PageText'
import BigText from '../comps/BigText'

export default function Home(){
  return <div>
      <h2>This is Noti Promot Web</h2>
      <h1>....Construction site!....</h1>
      <h3>Right now it is for components test</h3>
      <br/>
      <Logo />
      <BigText />
<<<<<<< HEAD
      {/* <Video /> */}
=======
      {/* <VideoUI /> */}
>>>>>>> 209d0e969f31c787ff51fa68a2bbc0db33ae1619
      <PageText />
      <Button/>
      <Button bgcolor='#EB5DFF' btnText='Test'/>
      <Avatar src='head_icons_adrian.svg' name='Adrian'/>
      <Avatar src='head_icons_levi.svg' name='Levi'/>
      <Avatar src='head_icons_warren.svg' name='Warren'/>
      <Screen/>
      <Screen imgUrl='note.png'/>
      <Screen imgUrl='todo.png'/>
    </div>
}
