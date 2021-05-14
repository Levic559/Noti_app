import Logo from '../comps/Logo'
import Button from '../comps/Button'
import MenuLi from '../comps/MenuLi'
import Header from '../comps/Header'

export default function Test(){
  return <div>
      <Header/>
      <h2>This is Noti Promot Web</h2>
      <h1>....Construction site!....</h1>
      <h3>Right now it is for components test</h3>
      <Button/>
      <Button bgcolor='#EB5DFF' btnText='Home' BtnPush='/'/>
      <Logo />

    </div>
}
