import axios from "axios";
import { useState } from "react";
import "./css/Forgot.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";

const ForgotPassword = () => {
  const [email, setemail] = useState("");
  const [pass, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [otp, setotp] = useState("");
  const [confirmOtp, setConfirmotp] = useState("");
  let navigate = useNavigate();

  const GenerateAndSendOTP = () => {
    console.log(email);
    axios
      .get(`http://localhost:8080/otp/?email=${email}`)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.otp === -1) {
          Swal.fire("User Not registered with us ! ", " ", "error");
        } else {
          setConfirmotp(Response.data.otp);
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const HandleOtp = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(confirmOtp);
    // console.log(otp);
    if (confirmOtp == otp) {
      console.log(pass);
      console.log(cpassword);
      if (pass === cpassword) {
        const Credential = { email: email, password: pass };
        console.log(Credential);
        axios.put("http://localhost:8080/changepassword", Credential).then(
          (Response) => {
            console.log(Response.data);
            if (Response.data.status) {
              Swal.fire(
                Response.data.msg,
                "Password changed ,Kindly log in .. ! ",
                "success"
              );
              navigate("/Login");
            } else {
              Swal.fire(Response.data.msg, " ", "error");
            }
          },
          (error) => serverDownAlert()
        );
        navigate("/Login");
      } else {
        Swal.fire(
          "Password Not Match",
          "Please fill correct Credentials ",
          "error"
        );
      }
    } else {
      Swal.fire("Invalid OTP", "Please fill correct Credentials ", "error");
    }
  };
  return (
    <>
      <Header />
      <div className="bg-dark" style={{ height: "60px" }}>
        {" "}
      </div>
      <div className="d-flex justify-content-center  loginback ">
        <div className=" m-5 loginform bg-light " style={{ width: "35vw" }}>
          <div className="p-5 text-black ">
            <h1>ForgotPassword</h1>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-success" onClick={GenerateAndSendOTP}>
                Get otp
              </button>
            </div>
            <h1>Change Password</h1>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control "
                id="password"
                value={pass}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                value={cpassword}
                onChange={(e) => {
                  setcPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                OTP
              </label>
              <input
                type="text"
                className="form-control"
                id="otp"
                value={otp}
                onChange={(e) => {
                  setotp(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={HandleOtp}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
