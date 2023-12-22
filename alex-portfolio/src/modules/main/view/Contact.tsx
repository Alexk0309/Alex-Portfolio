import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import { CONTACT_FORM_API } from "../../../api";
import "../../../index.css";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (
      (email.length !== 0 || email !== "") &&
      (message.trim().length !== 0 || message !== "")
    ) {
      alert("Your form was successfully submitted");
    } else return;
  };
  return (
    <ContactContainer id="contact">
      <Slide direction="left" triggerOnce>
        <SectionTitle>Contact</SectionTitle>
        <ContactFormContainer>
          <ContactForm
            id="contact-form"
            action={CONTACT_FORM_API}
            method="post"
          >
            <ContactInputContainer>
              <ContactInput
                name="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </ContactInputContainer>
            <ContactTextAreaContainer>
              <ContactTextArea
                name="Message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
              />
            </ContactTextAreaContainer>
            <ContactButton type="submit" onClick={handleSubmit}>
              Submit
            </ContactButton>
          </ContactForm>
        </ContactFormContainer>
      </Slide>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7%;
  padding-bottom: 5%;
  height: fit-content;
`;

const ContactFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactForm = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactInputContainer = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
`;

const ContactTextAreaContainer = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
`;

const ContactInput = styled.input`
  height: 100%;
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
`;

const ContactTextArea = styled.textarea`
  height: 200px;
  width: 100%;
  resize: vertical;
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  padding: 20px 20px 0;
  outline: 0;
`;

const ContactButton = styled.button`
  height: 50px;
`;
