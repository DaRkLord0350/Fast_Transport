import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import { getByDisplayValue } from "@testing-library/react";
import { useSSRSafeId } from "@react-aria/ssr";
import Header from "../layout/Header.js";

export default function AcceptOffer() {
  let navigate = useNavigate();
  const param = useParams();
  const bidid = param.bidid;
  const addid = param.addid;

  const [namee, setnamee] = useState(" - ");
  const [email, setemail] = useState(" - ");
  const [phone, setphone] = useState(" - ");
  const [price, setprice] = useState(" - ");
  const [datee, setdatee] = useState(" - ");
  const [data, setdata] = useState({});

  useEffect(() => {
    if (localStorage.getItem("userdata") == null) {
      navigate("/login");
    }

    if (bidid != 0) {
      getBid();
    } else {
      document.getElementById("accept").classList.add("disabled");
      getBidByAdd();
    }
  }, []);

  function getBidByAdd() {
    axios.get(`${url}/getbid-byadd?addid=${addid}`).then(
      (response) => {
        if (response.data.length != 0) {
          setnamee(response.data.user.name);
          setemail(response.data.user.email);
          setdatee(response.data.estimated_deliveryDate);
          setphone(response.data.user.phone);
          setprice(response.data.offer_price);
          setdata(response.data);
        } else {
          // alert("not allowed")
          // document.getElementById("accept").classList.add("disabled")
          navigate("/customerhome");
        }
      },
      (error) => serverDownAlert()
    );
  }

  function getBid() {
    axios.get(`${url}/getbid?bidid=${bidid}`).then(
      (response) => {
        if (response.data.length != 0) {
          setnamee(response.data.user.name);
          setemail(response.data.user.email);
          setdatee(response.data.estimated_deliveryDate);
          setphone(response.data.user.phone);
          setprice(response.data.offer_price);
          setdata(response.data);
        } else {
          // alert("not allowed")
          // document.getElementById("accept").classList.add("disabled")
          navigate("/customerhome");
        }
      },
      (error) => serverDownAlert()
    );
  }

  function sendAcceptRequest() {
    if (data.length !== 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Accept Offer!",
      }).then((result) => {
        if (result.isConfirmed) {
          showLoading();
          axios.put(`${url}/acceptoffer`, data).then(
            (response) => {
              Swal.showLoading();
              if (response.status == 200) {
                Swal.fire(
                  response.data.msg,
                  " Transporter Will reach you soon ! , Thank You !!   ",
                  "success"
                );
                navigate("/customerhome");
              } else {
                Swal.fire(
                  "Something Went wrong",
                  "Please try again !  ",
                  "error"
                );
              }
            },
            (error) => serverDownAlert()
          );
        }
      });
    }
  }

  return (
    <>
      <Header />
      <div>
        <div className=" row m-3 p-2 d-flex bg-light ">
          <div className="col-3"> </div>

          <div className="col-6 bg-danger ps-3 border border-warning mt-5 shadow bg-gradient">
            <h1> Offer Details</h1>
            <div className="m-1">
              {" "}
              <h4>
                Transporter Name :{" "}
                <span className="trans  badge bg-primary text-wrap">
                  {" "}
                  {namee}
                </span>{" "}
              </h4>{" "}
            </div>
            <div className="m-1">
              {" "}
              <h4>
                Transporter Email&ensp;:{" "}
                <span className="trans badge bg-primary text-wrap">
                  {" "}
                  {email}{" "}
                </span>{" "}
              </h4>{" "}
            </div>
            <div className="m-1">
              {" "}
              <h4>
                Transporter Phone&nbsp;:{" "}
                <span className="trans badge bg-primary text-wrap">
                  {" "}
                  {phone}{" "}
                </span>{" "}
              </h4>{" "}
            </div>
            <div className="m-1">
              {" "}
              <h4>
                Delivery Date &ensp;&nbsp; &emsp;:{" "}
                <span className="trans badge bg-primary text-wrap">
                  {datee}
                </span>
              </h4>
            </div>
            <div className="m-1">
              {" "}
              <h4>
                Offer Price &ensp;&nbsp;&emsp; &emsp; :{" "}
                <span className="trans badge bg-primary text-wrap">
                  {" "}
                  {price}{" "}
                </span>{" "}
              </h4>{" "}
            </div>
            <div className="m-1 ">
              {" "}
              <button
                id="accept"
                type="button"
                onClick={() => sendAcceptRequest()}
                className=" mt-2 btn w-75  btn-success btn-sm badge-pill"
              >
                {" "}
                Accept offer{" "}
              </button>{" "}
            </div>
          </div>

          <div className="col-3"> </div>
        </div>
      </div>
    </>
  );
}
