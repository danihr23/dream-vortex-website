
import React, { useCallback, useState } from 'react';
import styled from 'styled-components/macro';
import PrivacyPolicy from './PrivacyPolicy';

const Cookies = ({ isAgree, setIsAgree, isFooterPriveceClicked }) => {
    const [openPrivacyModal, setOpenPrivacyModal] = useState(false);

    return (
        <Wrapper isAgree={isAgree} openPrivacyModal={openPrivacyModal || isFooterPriveceClicked} >
            <PrivacyPolicy openPrivacyModal={openPrivacyModal || isFooterPriveceClicked} />
            <CookieWrapper>
                <a href='#sectionOne'>
                    <Title>Dream Vortex’s website uses cookies. By proceeding, you consent to our cookie usage. Please see Dream Vortex’s<SpanLink onClick={() => setOpenPrivacyModal(true)}> Privacy Policy.</SpanLink></Title>
                </a>
                <SubmitButton onClick={() => setIsAgree(true)}>I Agree</SubmitButton>

            </CookieWrapper>
        </Wrapper>
    )
}

export default Cookies;
const Wrapper = styled.div`
position: fixed;
height: ${props => props.openPrivacyModal && " 100%"};
bottom: 0;
z-index: 3;
  font-weight: 700;
  left:0 ;
width:100% ;
  display: ${props => props.isAgree ? 'none' : 'flex'};
  place-items: center;
  flex-direction:column ;
  background: rgba(20, 23, 23, 0.95);
  box-sizing:border-box ;
  padding:14px 137px ;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;



`;

const Title = styled.p`
  font-size: 18px ;
  font-weight:400 ;
  flex-grow: 1;

color: #fff;
font-family: "Lato", sans-serif;
@media (max-width: 1500px) {
    font-size: 40px;
  }

  @media (max-width: 1500px) { 
    font-size: 20px;   
}
@media (max-width: 990px) { 
    font-size:14px;   
}

`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  width:240px;
  height: 60px;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(90deg, rgba(0, 191, 188, 0.2) 0%, rgba(0, 170, 243, 0.2) 100%);
  border: 1px solid #00BFBC;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #007bff;;
  }

  @media (max-width: 1500px) { 
    width:180px;
  height: 40px;
}
@media (max-width: 990px) { 
  width:120px;
  height: 30px;
  font-size: 0.6em;
  padding: 6px 20px;
}
`;

const SpanLink = styled.span`
color:#00BFBC;
text-decoration:underline ;
cursor: pointer;
`
const CookieWrapper = styled.div`
width:100%;
display:flex;
place-items: center;
justify-content: space-between;


`;