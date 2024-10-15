
import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9g58ga9', 'template_yv68k08', form.current, {
        publicKey: 'AujYhQl-cankXTk7B',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Wrapper id={'sectionTwo'}>
    <Title>CONTACT US</Title>
    <InfoSection>
        <TextTitle>GET IN TOUCH</TextTitle>
        <Text>If you have any questions or concerns, please do not hesitate to get in touch with our team by filling out our contact form.
        </Text>
    <FormContainer ref={form}  onSubmit={sendEmail} >
      <FormGroup>
        <Label htmlFor="name">Name*</Label>
        <Input
          type="text"
          id="user_name"
          name="user_name"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email*</Label>
        <Input
          type="email"
          id="user_email"
          name="user_email"
          required
        />
      </FormGroup>
        <TextAndButtonSection>
      <FormGroup>
        <Label htmlFor="message">Message*</Label>
        <TextArea
          id="message"
          name="message"
          rows="5"
          required
        />
      </FormGroup>
      <Label htmlFor="message">*Required fields</Label>
      <SubmitButton type="submit">Submit</SubmitButton>
      </TextAndButtonSection>
    </FormContainer>
    </InfoSection>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
position: relative;
 font-family: "Lato", sans-serif;
  height: auto;
  padding: 80px 160px;
  min-height:583px;
  @media (max-width: 990px) { 
    padding: 40px 60px; 
}
@media screen and (orientation: portrait) {
    
  padding: 40px 40px 100px 40px;  
}
`;

const Title = styled.h2`
color: #fff;
text-align:center ;
font-family: Yeseva One;
font-optical-sizing: auto;
font-style: normal;
font-size:100px ;




@media (max-width: 1500px) { 
    font-size:80px;   
}
@media (max-width: 990px) { 
    font-size:60px;   
}
@media screen and (orientation: portrait) {
    font-size:40px; 

}

`;


const InfoSection = styled.section`
    max-width: 1260px;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;

    @media screen and (orientation: portrait) {
  align-items: center;

}
   
`;


const TextAndButtonSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: center;
    @media screen and (orientation: portrait) {
    align-items:start ;

}
`;

const Text = styled.p`
margin-top:20px ;
font-weight: 400;
font-size:24px;
max-width: 40ch;
color:#00BFBC;
min-width: auto;
@media (max-width: 1500px) {
    font-size:22px;
   
}
@media (max-width: 990px) { 
    font-size:16px;   
}
@media screen and (orientation: portrait) {
    font-size:16px; 
    text-align:center ;

}
`;

const TextTitle = styled.h3`
color:#fff;
font-size:32px ;

@media (max-width: 1500px) { 
    font-size:28px;   
}
@media (max-width: 990px) { 
    font-size:20px;   
}
@media screen and (orientation: portrait) {
    font-size:20px; 
    text-align:center ;

}
`;
const FormContainer = styled.form`
  display: grid;
  flex-direction: row;
  margin-top:30px ;
  gap:30px ;
  grid-template-columns: 1fr 1fr 1fr;
  width:100% ;
  justify-content:space-between ;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (orientation: portrait) {
    font-size:20px; 
    grid-template-columns:100%;
    grid-template-rows: auto;
    gap:17px ;

}

`;

const FormGroup = styled.div`
width: 100%;
margin-bottom: 7px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 1rem;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  margin-top:10px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #00BFBC;
  background: none;
  box-sizing: border-box;
  border-radius: 4px;
  color: #fff;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 1px;
  margin-top:10px;
  font-size: 1rem;
  border: 1px solid #00BFBC;
  background: none;
  border-radius: 4px;
  color: #fff;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  width:100% ;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(90deg, rgba(0, 191, 188, 0.2) 0%, rgba(0, 170, 243, 0.2) 100%);
  border: 1px solid #00BFBC;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #007bff;;
  }
`;


