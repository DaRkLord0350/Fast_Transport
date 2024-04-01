import axios from "axios";
import { React, useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import styled from "styled-components";
import url from "../api/Url";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";

export function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [feedback, setFeedback] = useState("");

  const FeedbackFormData = {
    name: name,
    email: email,
    phone: phone,
    feedback: feedback,
  };

  let navigate = useNavigate();
  const feedbackSubmit = (e) => {
    e.preventDefault();

    //feedback from users
    axios.post(`${url}/feedback`, FeedbackFormData).then(
      (response) => {
        alert("Successfully submitted");
        navigate("/Welcome");
      },
      (error) => serverDownAlert()
    );
  };

  return (
    <Formcss>
      <div class="backcolor">
        <div class="container">
          <div class="row">
            <div class="col">
              <img src="feaadbackk_02.webp" />
            </div>

            <div class="col feedback">
              <Container className="col-12 mt-5 mb-5">
                <Card className="shadow feedbackform">
                  <Card.Body>
                    <Card.Title align="center">Feedback Form</Card.Title>

                    <Form id="feedbackform" onSubmit={feedbackSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Full Name"
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                        <small id="nameHelp" className="text-danger form-text">
                          {nameError}
                        </small>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter Email-id"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <small id="emailHelp" className="text-danger form-text">
                          {emailError}
                        </small>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          min="10"
                          max="10"
                          placeholder="Enter Phone No."
                          onChange={(event) => setPhone(event.target.value)}
                        />
                        <small id="phoneHelp" className="text-danger form-text">
                          {phoneNumberError}
                        </small>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Feedback</Form.Label>
                        <textarea
                          type="feedback"
                          name="feedback"
                          class="form-control"
                          placeholder="Enter your Feedback"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          onChange={(event) => setFeedback(event.target.value)}
                        ></textarea>
                      </Form.Group>

                      {/* <Form.Control
                      type="feedback"
                      name="feedback"
                      placeholder="Enter your Feedback"
                      style={{ height: 100 }}
                      onChange={(event) => setFeedback(event.target.value)}
                    /> */}

                      <Button variant="primary" type="submit" className="">
                        Submit
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Formcss>
  );
}

const Formcss = styled.body`
{

  {

    .backcolor{
      background-color: #ffffff;
      background-image: linear-gradient(160deg, coral 0%, white 35%,white 50%, white 65%, #95e29f 100%);
  
  }

.col img{

    width: 450px;
    height: 550px;
    margin-top: 50px;
    margin-left: 60px
}

.feedback{
    margin-right: 60px;
}

.feedbackform{
    width: 450px;
}


}

`;
