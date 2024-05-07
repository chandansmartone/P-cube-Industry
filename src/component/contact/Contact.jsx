import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const [isFormReset, setIsFormReset] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02tcmuo",
        "template_eumn2d5",
        form.current,
        {
            publicKey: '2Is7AbUHe58YUMwbH',
          }
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("Message sent successfully!");
          setIsFormReset(true);
        },
        (error) => {
          console.error('Failed to send email: ', error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  const handleFormReset = () => {
    setIsFormReset(false);
  };

  return (
    <>
      <section id="contact">
       
    
      <StyledHeader>Contact Us</StyledHeader>
      <StyledLine />
      <StyledContactForm key={isFormReset ? "formReset" : "formNotReset"}>
        <form ref={form} onSubmit={sendEmail} onReset={handleFormReset}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <div className="form-group">
            <input type="submit" value="Send" />
          </div>
        </form>
      </StyledContactForm>
      <ToastContainer />
      </section>
    </>
  );
};

export default Contact;

// Styled Components
const StyledHeader = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledLine = styled.hr`
  border: none;
  border-bottom: 2px solid lightskyblue; // Light sky blue color
  width: 20%;
  margin: 0 auto 20px; // Centered and adds spacing below the line
`;

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 500px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    .form-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .form-group {
      flex: 1;
      margin-right: 10px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }

    textarea {
      min-height: 100px;
      resize: vertical;
    }

    input[type="submit"] {
      cursor: pointer;
      background: lightskyblue;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(135, 206, 250, 0.8);
      }
    }
  }
`;
