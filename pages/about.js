import Logo from '../comps/Logo'
import Button from '../comps/Button'
import MenuLi from '../comps/MenuLi'
import Header from '../comps/Header'
import BigText from '../comps/BigText'
import PageText from '../comps/PageText'
import styled from 'styled-components'
import Avatar from '../comps/Avatar'


const AboutCont = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #efecef;
`

const AboutTop = styled.div`
    width: 100%;

`

const AboutMid = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
`

const MidTop = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MidBottom = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border-radius: 10px;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`

const BottomUnit = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const HeadCont = styled.div`
    width: 100%;
    display: flex;
    margin: 10%;
    align-items: center;
    justify-content: center;
`



export default function about(){
  return <AboutCont>
      <AboutTop>
        <Header/>
      </AboutTop>
      <AboutMid>
        <MidTop>
          <BigText bigText='Meet the team' bigBody=''/>
        </MidTop>
        <MidBottom>
          <BottomUnit>
            <h2>Designers</h2>
            <HeadCont>
              <Avatar src='head_icons_levi.svg' name='Levi C.'/>
              <Avatar src='head_icons_warren.svg' name='Warren C.'/>
              <Avatar src='head_icons_adrian.svg' name='Adrian H.'/>
            </HeadCont>
          </BottomUnit>
          <BottomUnit>
            <h2>Developers</h2>
            <HeadCont>
              <Avatar src='head_icons_levi.svg' name='Levi C.'/>
              <Avatar src='head_icons_levi.svg' name='Levi C.'/>
            </HeadCont>
          </BottomUnit>
        </MidBottom>
      </AboutMid>

    </AboutCont>
}
