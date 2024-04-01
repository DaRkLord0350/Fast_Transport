import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";
import "./commonCSS.css";

export default function PostAdd() {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userdata") == null) {
      navigate("/login");
    }
  }, []);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [desc, setDesc] = useState("");
  const [weight, setWeight] = useState("");
  const [rname, setRname] = useState("");
  const [rphone, setRphone] = useState("");
  const [pincode, setPincode] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const today = new Date();
  today.setDate(today.getDate() + 1); // set minimum selectable date to tomorrow
  const minDate = today.toISOString().split("T")[0];

 const user = JSON.parse(localStorage.getItem("userdata"));

  const [data, setData] = useState({
    from_location: "",
    to_location: "",
    item_description: "",
    approx_weight: "",
    receiver_name: "",
    receiver_phone: "",
    dest_pincode: "",
    expected_deliveryDate: selectedDate,
    isBidFinalized: false,

    user: user,
  });

  function changehandler(e) {
    setSelectedDate(e.target.value);
    let namee = e.target.name;
    let val = e.target.value;

    setData({ ...data, [namee]: val });
    // console.log(data.expected_deliveryDate);
  }

  const [fromErr, setfromErr] = useState(false);
  const [toErr, settoErr] = useState(false);
  const [phErr, setphErr] = useState(false);
  const [wtErr, setwtErr] = useState(false);

  function fromlochandler(e){
    let item = e.target.value;
    console.log("Inside nameHandler");
    console.log(item);
    console.log(item.length);
    if(item.length<20 || item.length>50){
      console.log("Inside IF");
      setfromErr(true);
    }
    else{
      console.log("Inside else");
      setfromErr(false);
    }
    let namee = e.target.name;
    let val = e.target.value;

    setData({ ...data, [namee]: val });
  }

  function tolochandler(e){
    let item = e.target.value;
    if(item.length<20 || item.length>50){
      settoErr(true);
    }
    else{
      settoErr(false);
    }
    let namee = e.target.name;
    let val = e.target.value;

    setData({ ...data, [namee]: val });
  }

  function phonehandler(e){
    let item = e.target.value;
    var phone = /^(?:\+91|0)?[6789]\d{9}$/ ;
    console.log(item.match(phone));
    console.log(phone.test(item));
    if(!phone.test(item)){
      // item.match(phone)
      console.log("Inside if");
      setphErr(true);
    }
    else{
      console.log("Inside else");
      setphErr(false);
    }
    let namee = e.target.name;
    let val = e.target.value;

    setData({ ...data, [namee]: val });
  }

  function apxwthandler(e){
    let item = e.target.value;
    if(item < 50){
      console.log("Inside if");
      setwtErr(true);
    }
    else{
      console.log("Inside else");
      setwtErr(false);
    }
    
    let namee = e.target.name;
    let val = e.target.value;

    setData({ ...data, [namee]: val });
  }

  function clearError() {
    setfromErr(false);

  }

  var phone = /^[6789]\d{9}$/ ;

  function validate(e) {
    e.preventDefault();
    clearError();
    if (
      data.from_location.trim() === "" ||
      data.to_location.trim() === "" ||
      data.item_description.trim() === "" ||
      data.approx_weight.trim() === "" ||
      data.receiver_name.trim() === "" ||
      data.receiver_phone.trim() === "" ||
      data.dest_pincode.trim() === "" ||
      data.expected_deliveryDate === ""
    ) {
      Swal.fire("All fields are  required");
    } else if(
      data.from_location.length < 20 ||
      data.from_location.length > 50
    ){
      setfromErr(true);
    }
    else if(
      data.to_location.length < 20 || data.to_location.length > 50
    ){ settoErr(true);}
    else if(
      !data.receiver_phone.match( phone)
    ){ setphErr(true);}
    else {
      postAdd();
    }
  }

  function postAdd() {
    showLoading();

    if (
      data.from_location.trim() === "" ||
      data.to_location.trim() === "" ||
      data.item_description.trim() === "" ||
      data.approx_weight == "" ||
      data.receiver_name.trim() === "" ||
      data.receiver_phone == "" ||
      data.dest_pincode == "" ||
      data.expected_deliveryDate == ""
    ) {
      blankAlert();
    } else {
      // console.log(data.user)

      axios.post(`${url}/advertisement`, data).then(
        (response) => {
          Swal.showLoading();
          if (response.data.status) {
            Swal.fire(
              response.data.msg,
              "It will be visible to all the Trasporters within few seconds ! ",
              "success"
            );
            navigate("/customerhome");
          } else {
            Swal.fire("Something Went wrong", "Please try again !  ", "error");
          }
        },
        (error) => serverDownAlert()
      );
    }
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="postaddbg">
        <div className="" style={{ height: "70px" }}>
          {" "}
        </div>
        {/* <section className="vh-100" > */}
        <div className="">
          <div className="container h-100 ">
            <div className="row d-flex justify-content-center align-items-center h-100 ">
              <div className="col-lg-8 col-xl-9 mt-5 mb-5  ">
                <div className="card text-black bg-gradient shadow ">
                  <div className="card-body p-md-5 postaddform">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Post Your Advertise Here!
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa fa-map-marker fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="fname"
                                name="from_location"
                                className="form-control"
                                placeholder="From_Location"
                                onChange={fromlochandler}
                                // onFocus={clearError}
                                value={data.from_location}
                              />
                              {fromErr ? (
                                <span className="text-danger">
                                  *Address should be 20-50 characters in length
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa fa-map-marker fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="to_location"
                                className="form-control"
                                placeholder="To_Location"
                                onChange={tolochandler}
                                value={data.to_location}
                              />
                              {toErr ? (
                                <span className="text-danger">
                                  *Delivery Address should be 20-50 characters in length
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa fa-edit fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="item_description"
                                className="form-control"
                                placeholder="Item_Description"
                                onChange={changehandler}
                                value={data.item_description}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa fa-balance-scale fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="approx_weight"
                                className="form-control"
                                placeholder="Approx_weight in Kgs"
                                onChange={apxwthandler}
                                value={data.approx_weight}
                              />
                              {wtErr ? (
                                <span className="text-danger">
                                  *Material Weight should be more than 50Kgs
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="receiver_name"
                                className="form-control"
                                placeholder="Reciever Name"
                                onChange={changehandler}
                                value={data.receiver_name}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fa fa-mobile fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="phone"
                                id="phone"
                                name="receiver_phone"
                                className="form-control"
                                placeholder="Receiver Number"
                                onChange={phonehandler}
                                value={data.receiver_phone}
                              />
                              {phErr ? (
                                <span className="text-danger">
                                  *Phone no should start with 9,8,7,6 and must be 10 digit no
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fa fa-map-pin fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="number"
                                name="dest_pincode"
                                className="form-control"
                                placeholder="Destination Pincode"
                                Length={6}
                                onChange={changehandler}
                                value={data.dest_pincode}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fa fa-calendar fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="date"
                                id="date"
                                name="expected_deliveryDate"
                                className="form-control"
                                min={minDate}
                                placeholder="Expected Delivery Date"
                                onChange={changehandler}
                                value={selectedDate}
                              />
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary p-3 "
                              onClick={validate}
                            >
                              Post
                            </button>
                            <button
                              type="submit"
                              className="btn btn-danger p-3 "
                              onClick={() => navigate("/customerhome")}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </section> */}
        </div>
      </div>
    </>
  );
}
