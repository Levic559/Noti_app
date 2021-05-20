import Header from '../comps/Header'
import BigText from '../comps/BigText'
import styled from 'styled-components'
import Avatar from '../comps/Avatar'


const AboutCont = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #efecef;

    @media (max-width: 780px)
    {
      height: 100%;
    };
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

    @media (max-width: 780px)
    {
      height: 150px;
    };
`

const MidBottom = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 780px)
    {
      flex-direction: column;
      height: ;
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
const FooterCont = styled.div`
  background-color: #efecef;
  justify-content:center;
  display:flex;
  align-items:center;
  text-align:center
  width: 100wv;
  height: 30px;
  margin-top:100px;
  @media (max-width: 450px) {
    fontSize:14px;
 }
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
      <FooterCont>
        Marketing Website Demo/IDSP-2380-0-Web Projects 1/ BCIT 2021
        </FooterCont>
    </AboutCont>
}
