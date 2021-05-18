import Logo from "../comps/Logo";
import Button from "../comps/Button";
import Avatar from "../comps/Avatar";
import Screen from "../comps/Screen";
import VideoUI from "../comps/VideoUI";
import PageText from "../comps/PageText";
import BigText from "../comps/BigText";
import MenuLi from "../comps/MenuLi";
import Header from "../comps/Header";
import styled from "styled-components";

const PageCont = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
`;
const Statement = styled.div`
  background-color: #efecef;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  width: 100wv;
  height: 360px;
  
`;
const ScreenCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: center;
  align-items:center;
  height:100%;
`;
const BottomCont = styled.div`
  background-color: #efecef;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  width: 100wv;
  height: 240px;
`
export default function Home() {
  return (
    <div>
      <PageCont>
        <Header />
        <Statement>
          <BigText
            bigText="Let’s get organized !"
            bigBody="Seamlessly link your notes, to-do lists,
      and calendar for easy organization.
"
          />
        </Statement>

        <ScreenCont>
          <Screen />
          <Screen imgUrl="note.png" />
          <Screen imgUrl="todo.png" />
        </ScreenCont>


        <BottomCont>
        <BigText
            bigText=""
            bigBody= "Noti helps you group, navigate, and arrange your entries thanks to it’s innovative modular design."
          />
            <Button btnText="Featues" bgcolor="#EB5DFF" BtnPush='/features'/>
        </BottomCont>
      
      </PageCont>
    </div>
  );
}
