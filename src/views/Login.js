import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import url from '../api/Url'
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from '../layout/Header.js'
import './commonCSS.css'


export default function Login() {

  let navigate = useNavigate();




  //Toast function
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })



  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

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
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);

    let name = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name]: val });
  }


  function handleLogin(e) {
    userLogin();
    e.preventDefault();
  }

  function userLogin() {


    if (emailErr || data.email.trim() == "" || passwordErr || data.password.trim() == "") {
      blankAlert();
    } else {

      showLoading();

      axios.post(`${url}/login`, data).then((response) => {

        Swal.showLoading()
        if (response.status === 200) {

          if (response.data.length == 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Wrong Credentials Entered or you have not registered yet.",
              confirmButtonText: 'Cool'
            });
            navigate('/login')
          }
          else {

            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })

            localStorage.setItem("userdata", JSON.stringify(response.data));
            //  localStorage.setItem("userdata", JSON.stringify(response.data));

            // console.log(JSON.stringify(response.data))
            if (response.data.isAdmin) {
              navigate('/adminhome')

            }
            else if (response.data.isTransporter) {
              navigate('/transporterhome')
              

            }

            else if (!response.data.isTransporter) {
              navigate('/customerhome')
            }

          }
        }

      },

        (error) => serverDownAlert()

      )

    }
  }

  return (
    <div className="login ">
      <Header />
      <div className="" style={{ height: "70px" }}> </div>
      {/* <section className="vh-100" > */}
      <div className="">
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-8 col-xl-9 mt-5">
              <div
                className="card text-black bg-white"
                style={{ borderRadius: "25px", opacity: "0.8" }}
              >
                <div className="card-body p-md-5 ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>

                      <form className="mx-1 mx-md-4" autoComplete="off" >

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter E-Mail"
                              value={data.email}
                              onChange={emailHandler}
                              required
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
                          <i className="fa fa-unlock-alt fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={data.password}
                              onChange={passwordHandler}
                              required
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

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-primary btn-lg"
                            onClick={handleLogin}

                          >
                            <Link
                              to=""
                              className="nav-links"
                              style={{ color: "black" }}
                            >
                              Sign In
                            </Link>
                          </button>
                        </div>

                        <p className="forogt-password text-center">
                          <Link to="/ForgotPassword">Forgot Password</Link> / Do you
                          have an account ?
                          <Link to="/CustomerReg"> Sign Up</Link>
                        </p>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="./images/symbolCusto"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
      <div className="" style={{ height: "70px" }}> </div>
    </div>
  );
}