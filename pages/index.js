import Logo from '../comps/Logo'
import Button from '../comps/Button'
import Avatar from '../comps/Avatar'
import Screen from '../comps/Screen'
import VideoUI from '../comps/VideoUI'
import PageText from '../comps/PageText'
import BigText from '../comps/BigText'
import MenuLi from '../comps/MenuLi'
import Header from '../comps/Header'
import styled from 'styled-components'


const LandCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: #efecef;
`

const LandTop = styled.div`
  width: 100vw;
`

const LandMid = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Landing() {
  return <LandCont>
      <LandTop>
        <Logo />
      </LandTop>
      <LandMid>
        <VideoUI />
        <Button btnText='Start' BtnPush='/home' />
      </LandMid>
    </LandCont>
}
