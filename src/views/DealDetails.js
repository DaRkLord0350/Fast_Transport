import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";

import Pdf from "react-to-pdf";

export default function DealDetails() {
  useEffect(() => {
    if (localStorage.getItem("userdata") == null) {
      navigate("/login");
    } else {
      getBid();
    }
  }, []);

  let navigate = useNavigate();
  const param = useParams();
  const bidid = param.bidid;

  const [data, setdata] = useState({});

  const [cname, setcname] = useState("");
  const [cphone, setcphone] = useState("");
  const [cemail, setcemail] = useState("");

  const [addid, setaddid] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [pin, setpin] = useState("");
  const [desc, setdesc] = useState("");
  const [weight, setweight] = useState("");
  const [rname, setrname] = useState("");
  const [rphone, setrphone] = useState("");
  const [date, setdate] = useState("");

  const [id, setid] = useState("");
  const [price, setprice] = useState("");
  const [tname, settname] = useState("");
  const ref = React.createRef();

  function getBid() {
    axios.get(`${url}/getbid?bidid=${bidid}`).then(
      (response) => {
        if (response.data.length != 0) {
          setcname(response.data.add.user.name);
          setcemail(response.data.add.user.email);
          setcphone(response.data.add.user.phone);

          setaddid(response.data.add.add_id);
          setfrom(response.data.add.from_location);
          setto(response.data.add.to_location);
          setpin(response.data.add.dest_pincode);
          setdesc(response.data.add.item_description);
          setweight(response.data.add.approx_weight);

          setrname(response.data.add.receiver_name);
          setrphone(response.data.add.receiver_phone);
          setdate(response.data.estimated_deliveryDate);

          setid(response.data.bid_id);
          setprice(response.data.offer_price);
          settname(response.data.user.name);

          setdata(response.data);
        } else {
          // alert("not allowed")
          // document.getElementById("accept").classList.add("disabled")
          navigate("/transporterhome");
        }
      },
      (error) => serverDownAlert()
    );
  }

  return (
    <React.Fragment>
      <Header />
      <div className="mt-5 pt-5" ref={ref}>
        <h1 className="text-left">DealDetails</h1>

        <div>
          <div className=" row d-flex my-5">
            <div className="  "> </div>

            <div className=" col-6 border border-warning shadow ">
              <h4>Customer details : </h4>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Customer Name </th>
                    <th scope="col">{cname}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">Customer Phone</th>
                    <td>{cphone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Customer Email</th>
                    <td>{cemail}</td>
                  </tr>

                  <h4 className="mt-3">Shipment Details:</h4>
                  <tr>
                    <th scope="row">Advertisement ID</th>
                    <td>{addid}</td>
                  </tr>
                  <tr>
                    <th scope="row">Source location</th>
                    <td>{from}</td>
                  </tr>
                  <tr>
                    <th scope="row">Destination location</th>
                    <td>{to}</td>
                  </tr>
                  <tr>
                    <th scope="row">Destination Pincode</th>
                    <td>{pin}</td>
                  </tr>
                  <tr>
                    <th scope="row">Item Description</th>
                    <td>{desc}</td>
                  </tr>
                  <tr>
                    <th scope="row">Approximate Weight(Kg)</th>
                    <td>{weight}</td>
                  </tr>

                  <tr>
                    <th scope="row">Receiver Name</th>
                    <td>{rname}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone number</th>
                    <td>{rphone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Delivery Date</th>
                    <td>{date}</td>
                  </tr>

                  <h4 className="mt-3">Pricing Details:</h4>
                  <tr>
                    <th scope="row">Bidding ID</th>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th scope="row">Offer Price</th>
                    <td>{price}</td>
                  </tr>
                  <tr>
                    <th scope="row">Transporter Name</th>
                    <td>{tname}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-5 ">
        <Pdf targetRef={ref} filename="Invoice.pdf">
          {({ toPdf }) => <button type="button" class="btn btn-outline-primary" onClick={toPdf}>Download Invoice</button>}
        </Pdf>
      </div>
    </React.Fragment>
  );
}
