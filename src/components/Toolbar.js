

import styled from 'styled-components/macro';
import logo from '../asets/LogoCompany.png';


const Toolbar = () => {


    return (
        <Wrapper>
            <Logo />
            <a style={{ textDecoration: "none" }} href='#sectionTwo'>
                <Contact>Contact</Contact>
            </a>


        </Wrapper>
    )
}

export default Toolbar;



const Wrapper = styled.div`
position: sticky;
top: 0;
z-index: 5;
  left:0;
  width:100% ;
  display:  flex;
  place-items: center;
  justify-content: space-between;
  background: transparent;
  box-sizing:border-box ;
  padding:40px ;

   
`;

const Logo = styled.div`
width:200px ;
height:60px ;
background: url(${logo}) no-repeat center center;
background-size: 100% auto;
@media (max-width: 1500px) {
    font-size: 40px;
  }


`;

const Contact = styled.div`
font-family: "Yrsa", serif;
font-weight:400 ;
text-align: center;
padding-top: 12px;
box-sizing: border-box;

  width:200px;
  height: 60px;
  font-size: 28px;
  color: #fff;
  background: rgba(30, 30, 30, 0.58);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color:rgba(30, 30, 30, 1);
  }
`;

