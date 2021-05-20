import Header from '../comps/Header'
import Footer from '../comps/Footer'
import Contact from '../comps/Contact'
import BigText from '../comps/BigText'
import styled from 'styled-components'
import Avatar from '../comps/Avatar'


const AboutCont = styled.div`
    width: 100vw;
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #efecef;

    @media (max-width: 780px)
    {
      height: ;
    };
`

const AboutTop = styled.div`
    width: 100%;
    height: 20%;

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
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 780px)
    {
      height: ;
    };
`

const MidBottom = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 780px)
    {
      flex-direction: column;
      height: 100%;
    };
`

const BottomUnit = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
      margin-top: 80px;
    }

    @media (max-width: 780px)
    {
      width: 100%;
      
      h2{
        margin-top: 50px;
        border-bottom: solid 1px;
      }
    };
`

const HeadCont = styled.div`
    width: 100%;
    display: flex;
    margin: 50px;
    align-items: center;
    justify-content: center;

    @media (max-width: 780px)
    {
      flex-direction: column;
      margin: 20px;
    };
`



export default function about(){
  return <AboutCont>
        <Header/>
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
              <Avatar src='head_icons_kya.svg' name='Kya B.'/>
              <Avatar src='head_icons_adam.svg' name='Adam S.'/>
            </HeadCont>
          </BottomUnit>
        </MidBottom>
      </AboutMid>
      <Contact/>
      <Footer/>
    </AboutCont>
}
