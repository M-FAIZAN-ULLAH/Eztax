import React,{useEffect,useState} from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/form/Taxi1.jpg";
import ContactImg2 from "../../assets/img/form/Taxi2.jpg";
import ContactImg3 from "../../assets/img/form/Taxi3.jpg";
import axios from "axios";


import { Input } from "@material-tailwind/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const emailData = {
        to: "amarahabib630@gmail.com",
        subject: "Contact Us",
        text: `
          First Name: ${formData.fname}
          Email: ${formData.email}
          Subject: ${formData.subject}
          Message: ${formData.message}
        `,
      };

      const response = await axios.post('http://localhost:5000/api/send-email', emailData);
      setMessage('Your message has been sent.');
      setFormData({
        fname: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setMessage('Error sending email. Please try again later.');
      console.error(error);
    }
  };
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h2 className="font40 extraBold">Let's get in touch</h2>
            <h4 className="font20 semiBold">
            Feel free to drop us a message with any inquiries or feedback you may have. We'll be sure to respond promptly. 
              <br />
              Thank you for considering us!
            </h4>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Form onSubmit={handleSubmit}>
                <label className="font13">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                  value={formData.fname}
                  onChange={handleChange}
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                  value={formData.message}
                  onChange={handleChange}
                />
                 {message && <Message>{message}</Message>}
                </Form>
             
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                  onClick={handleSubmit}
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Message = styled.div`
  margin-top: 20px;
  color: green;
`;
