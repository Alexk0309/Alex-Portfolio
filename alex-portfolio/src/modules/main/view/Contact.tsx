import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
// import { CONTACT_FORM_API } from "../../../api";
import "../../../index.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      (name.trim().length !== 0 || name !== "") &&
      (message.trim().length !== 0 || message !== "")
    ) {
      emailjs
        .sendForm(
          "portfolio_mail",
          "template_ib7tr58",
          e.currentTarget,
          "sDqoPYI-T5Spdw0fP"
        )
        .then(
          () => {
            alert("Your form was successfully submitted");
            setEmail("");
            setName("");
            setMessage("");
          },
          (error) => {
            alert(error.text);
          }
        );
    } else return;
  };

  // const handleSubmit = () => {
  //   if (
  //     email.match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     ) &&
  //     (message.trim().length !== 0 || message !== "")
  //   ) {
  //     alert("Your form was successfully submitted");
  //   } else return;
  // };
  return (
    <ContactContainer id="contact">
      <Slide direction="left" triggerOnce>
        <SectionTitle>Contact</SectionTitle>
        <ContactFormContainer>
          <ContactForm
            id="contact-form"
            onSubmit={handleSubmit}
            // action={CONTACT_FORM_API}
            // method="post"
          >
            <ContactInputContainer>
              <ContactInput
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </ContactInputContainer>
            <ContactInputContainer>
              <ContactInput
                name="name"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </ContactInputContainer>
            <ContactTextAreaContainer>
              <ContactTextArea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
              />
            </ContactTextAreaContainer>
            <ContactButton type="submit">Submit</ContactButton>
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
  background-color: #15161e;
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
  background-color: #15161e;
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
