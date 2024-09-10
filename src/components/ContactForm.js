
import React, { useState } from 'react';
import styled from 'styled-components/macro';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
        name: '',
        email: '',
        message: ''
      });

  };

  return (
    <Wrapper>
    <Title>CONTACT US</Title>
    <InfoSection>
        <TextTitle>GET IN TOUCH</TextTitle>
        <Text>If you have any questions or concerns, please do not hesitate to get in touch with our team by filling out our contact form.
        </Text>
    <FormContainer onSubmit={handleSubmit}  action="https://formsubmit.co/danailhristov23@gmail.com" method="POST" >
      <FormGroup>
        <Label htmlFor="name">Name*</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email*</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
        <TextAndButtonSection>
      <FormGroup>
        <Label htmlFor="message">Message*</Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
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
  min-height:583px ;
`;

const Title = styled.h2`
color: #fff;
text-align:center ;
font-family: "Yrsa", serif;
font-optical-sizing: auto;
font-style: normal;
font-size:100px ;




@media (max-width: 1500px) { 
    font-size:80px;   
}

`;


const InfoSection = styled.section`
    max-width: 1260px;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
   
`;


const TextAndButtonSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: center;
   
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
`;

const TextTitle = styled.h3`
color:#fff;
font-size:32px ;

@media (max-width: 1500px) { 
    font-size:28px;   
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


