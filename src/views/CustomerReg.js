import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";
import "./commonCSS.css";
import image1 from "../images/regpage1.jpg";

export default function Registration() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [zipCode, setZipCode] = useState("");
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isTransporter, setIsTransporter] = useState(false);

  const [selectedOption, SetSelectedOption] = useState("");
  const [role, setRole] = useState("customer");

  useEffect(() => {
    if (zipCode.length === 6) {
      axios
        .get(`https://api.postalpincode.in/pincode/${zipCode}`)
        .then((response) => {
          const { Status, PostOffice } = response.data[0];
          if (Status === "Success") {
            const state = PostOffice[0].State;
            const city = PostOffice[0].District;
            setState(state);
            setCity(city);
          } else {
            setState("Unknown");
            setCity("Unknown");
          }
        })
        .catch((error) => {
          console.log(error);
          setState("Error");
          setCity("Error");
        });
    } else {
      setState("");
      setCity("");
    }
  }, [zipCode]);

  const handleZipCodeChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Remove non-digits
    setZipCode(value);
  };

  function nameHandler(e) {
    let item = e.target.value;

    if (item.length < 5) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);

    let name = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name]: val });
  }

  function emailHandler(e) {
    let item = e.target.value;
    if (validator.isEmail(data.email)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
    let name = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name]: val });
    setEmail(item);
  }

  function phoneHandler(e) {
    let item = e.target.value;
    var phone = /^(?:\+91|0)?[6789]\d{9}$/;
    if (item.match(phone)) {
      setPhoneErr(false);
    } else {
      setPhoneErr(true);
    }
    setPhone(item);

    let name = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name]: val });
  }

  function passwordHandler(e) {
    let item = e.target.value;
    setPassword(item);
    if (item.length < 8) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }

    let name = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name]: val });
  }

  function confirmPasswordHandler(e) {
    let item = e.target.value;
    setConfirmPassword(item);

    if (password === confirmPassword) {
      console.log("matched");
      setConfirmPasswordErr(false);
    } else {
      console.log("incorrect");
      // setConfirmPasswordErr(true);
    }

    let namee = e.target.name;
    let val = e.target.value;
    setData({ ...data, [namee]: val });
  }

  function register(e) {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("Password & Confirm password not matched !!");
      return;
    }

    showLoading();

    if (
      nameErr ||
      data.name.trim() === "" ||
      emailErr ||
      data.email.trim() === "" ||
      phoneErr ||
      data.phone == "" ||
      passwordErr ||
      data.password.trim() === "" ||
      city == "" ||
      state == ""
    ) {
      // show empty alert here ...

      blankAlert();
    } else {
      // axios

      const registerData = {
        name: name,
        email: email,
        phone: phone,
        pass: password,
        state: state,
        city: city,
        isTransporter: isTransporter,
        isAdmin: false,
        role: role,
      };

      axios.post(`${url}/register`, registerData).then(
        (response) => {
          Swal.showLoading();
          //  setRegisterResult(response.data);
          if (response.data.status) {
            // sessionStorage.setItem('account', response.data);
            //  sessionStorage.setItem('customerName', response.data.customerName);

            Swal.fire(response.data.msg, "Kindly log in .. ! ", "success");

            navigate("/login");
          } else {
            Swal.fire(response.data.msg, "Use different email id", "info");
          }
        },
        (error) => serverDownAlert()
      );
    }
  }

  const radiocheck = (event) => {
    // if(value=="transporter")
    // setIsTransporter(true);
    SetSelectedOption(event.target.value);
    if (event.target.value == "transporter") {
      setRole(event.target.value);
      setIsTransporter(true);
    } else setRole("customer");
  };

  return (
    <>
      {/* <div className="" style={{ height: "70px" }}>
        {" "}
      </div> */}
      {/* <section className="vh-100" > */}
      <div className="registerCustom">
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-8 col-xl-9 mt-5 pt-5">
              <div
                className="card text-black bg-white "
                style={{ borderRadius: "25px", opacity: "0.8" }}
              >
                <div className="card-body p-md-5 shadow">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registration
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-user fa-lg me-3 fa-lg"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              placeholder="Enter name"
                              className="form-control"
                              name="name"
                              value={data.name}
                              onChange={nameHandler}
                            />
                            {nameErr ? (
                              <span className="text-danger">
                                Enter Valid name..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-envelope fa-lg me-3 fa-lg"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              value={data.email}
                              onChange={emailHandler}
                            />
                            {emailErr ? (
                              <span className="text-danger">
                                Enter Valid email..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-phone-square fa-lg me-3 fa-lg"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="phone"
                              placeholder="Enter phone or mobile no"
                              className="form-control"
                              name="phone"
                              maxLength={10}
                              value={data.phone}
                              onChange={phoneHandler}
                            />
                            {phoneErr ? (
                              <span className="text-danger">
                                Enter Valid phone no..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-unlock-alt fa-lg me-3 fa-lg"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={data.password}
                              onChange={passwordHandler}
                            />
                            {passwordErr ? (
                              <span className="text-danger">
                                Enter Valid password..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4 ">
                          <i className="fa fa-unlock-alt fa-lg me-3 fa-lg"></i>
                          <div className="form-outline flex-fill mb-0 ">
                            <input
                              type="password"
                              placeholder="Confirm Password"
                              className="form-control "
                              name="confirm password"
                              value={confirmPassword}
                              onChange={confirmPasswordHandler}
                            />
                            {confirmPasswordErr ? (
                              <span className="text-danger">
                                Enter Valid password..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="d-flex flex-row align-items-center mb-4 ">
                            <i
                              class="fa fa-lg fa-address-card me-3"
                              aria-hidden="true"
                            ></i>
                            <div className="form-outline flex-fill mb-0 ">
                              <input
                                type="text"
                                placeholder="Pin Code"
                                value={zipCode}
                                maxLength="6"
                                onInput={handleZipCodeChange}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4 ">
                            <div className="form-outline flex-fill mb-0 "></div>
                            <input
                              type="text"
                              className="form-control "
                              disabled={true}
                              value={city}
                              onChange={setCity}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4 ">
                          <div className="form-outline flex-fill mb-0 ">
                            <input
                              type="text"
                              className="form-control "
                              disabled={true}
                              value={state}
                              onChange={setState}
                            />
                          </div>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            onChange={radiocheck}
                            value="customer"
                            checked={selectedOption === "customer"}
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Register as Customer.
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            onChange={radiocheck}
                            value="transporter"
                            checked={selectedOption === "transporter"}
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Register as transporter.
                          </label>
                        </div>
                        <br></br>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-primary p-3 "
                            onClick={register}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={image1}
                        className="img-fluid "
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
        <div className="" style={{ height: "70px" }}>
          {" "}
        </div>
      </div>
    </>
  );
}
