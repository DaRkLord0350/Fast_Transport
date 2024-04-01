import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";

export default function PostBid() {
  useEffect(() => {
    if (localStorage.getItem("userdata") == null) {
      navigate("/login");
    }
  }, []);


  let navigate = useNavigate();
  const param = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const today = new Date();
  today.setDate(today.getDate() + 1); // set minimum selectable date to tomorrow
  const minDate = today.toISOString().split('T')[0];

  

  const addid = param.id;

  const [formData, setFormData] = useState({
    offer_price: "",
    estimated_deliveryDate: selectedDate,
    remark: "",
  });

  function changehandler(e) {
    setSelectedDate(e.target.value);
    let namee = e.target.name;
    let val = e.target.value;
    setFormData({ ...formData, [namee]: val });
  }

  function placebid(e) {
    //e.preventDefualt();

    if (
      formData.offer_price == "" ||
      formData.estimated_deliveryDate == "" ||
      formData.remark == ""
    ) {
      blankAlert();
    } else {
      const data = {
        offer_price: formData.offer_price,
        estimated_deliveryDate: formData.estimated_deliveryDate,
        remark: formData.remark,
        user: JSON.parse(localStorage.getItem("userdata")),
      };

      axios.post(`${url}/placebid?addid=${addid}`, data).then(
        (response) => {
          Swal.showLoading();
          if (response.data.status) {
            Swal.fire(
              response.data.msg,
              "It will be visible to Customer within few seconds ! ",
              "success"
            );
            navigate("/transporterhome");
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
      <Header />
      <div className="postbidbg">
        <div className="" style={{ height: "70px" }}>
          {" "}
        </div>
        <h1>PostBid</h1>

        <div className="row d-flex m-5 ">
          <div className=" col-3"></div>

          <div className="col-6">
            <form>
              <div className="mb-3">
                Offer Price{" "}
                <input
                  type="text"
                  name="offer_price"
                  value={formData.offer_price}
                  onChange={changehandler}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>

              <div className="mb-3">
                Estimated Delivery Date{" "}
                <input
                  type="date"
                  id="date"
                  min={minDate}
                  name="estimated_deliveryDate"
                  onChange={changehandler}
                  className="form-control" 
                  value={selectedDate}
                  required
                />
              </div>

              <div className="mb-3">
                Remark{" "}
                <input
                  type="text"
                  name="remark"
                  value={formData.remark}
                  onChange={changehandler}
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>

              <button
                type="button"
                onClick={placebid}
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => navigate("/transporterhome")}
                className="btn btn-warning"
              >
                Cancel
              </button>
            </form>
          </div>

          <div className=" col-3"></div>
        </div>
      </div>
    </>
  );
}
