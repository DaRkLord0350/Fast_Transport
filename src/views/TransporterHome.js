import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";
import "./commonCSS.css";

export default function TransporterHome() {
  let navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [adds, setAdds] = useState([]);
  const [bidflag, setbidflag] = useState(false);
  const [bids, setbids] = useState([]);
  const [transporterid, settransporterid] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("userdata") == null) {
      navigate("/login");
    } else {
      settransporterid(JSON.parse(localStorage.getItem("userdata")).user_id);
    }
  }, []);

  function getAllAdds(e) {
    e.preventDefault();

    axios.get(`${url}/getalladds`).then(
      (response) => {
        if (response.status == 200) {
          setFlag(true);
          setAdds(response.data);
        } else {
          Swal.fire("Something Went wrong", "Please try again !  ", "error");
        }
      },
      (error) => serverDownAlert()
    );
  }

  function getYourBids(e) {
    e.preventDefault();
    showLoading();

    axios.get(`${url}/getyourbids?tid=${transporterid}`).then(
      (response) => {
        Swal.showLoading();
        if (response.status == 200) {
          Swal.fire(
            "your bids are fetched",
            "You can place your bid for any Shipment that you can transport ! ",
            "success"
          );
          setbidflag(true);
          setbids(response.data);
        } else {
          Swal.fire("Something Went wrong", "Please try again !  ", "error");
        }
      },
      (error) => serverDownAlert()
    );
  }

  function deleteBid(bidid) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        showLoading();
        //http://localhost:8080/getallbids/?addid=10
        axios.delete(`${url}/deletebid/?bidid=${bidid}`).then(
          (response) => {
            Swal.showLoading();
            if (response.data.status) {
              Swal.fire("Deleted!", "Your Bid has been deleted.", "success");
              setbidflag(false);
              // getYourAdds();
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

  return (
    <>
      <Header />
      <div className="transporterHomebg">
        <div className="" style={{ height: "70px" }}>
          {" "}
        </div>
        <div className="col-6 offset-3"><h1 className="alert alert-secondary">Welcome Transporter</h1></div>

        <button className="btn btn-info " onClick={getAllAdds}>
          {" "}
          View Adds
        </button>

        <button className="btn btn-info " onClick={getYourBids}>
          {" "}
          View Your Bids
        </button>

        <button className="btn btn-danger " onClick={() => setFlag(false)}>
          {" "}
          Clear Screen
        </button>

        {flag ? (
          <div className="col-10 offset-1">
            <h1 className=" mb-3 text-center text-white fw-bold"></h1>
            <div class="card mb-2">
              <h5 class="card-header bg-dark bg-gradient text-light fs-4">
                Advertising List
              </h5>
              <div class="card-body bg-info bg-gradient shadow ">
                <table
                  class="table table-hover bg-white table-bordered shadow "
                  style={{ tableLayout: "fixed" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">Add_Id</th>
                      <th scope="col">Placed By</th>
                      <th scope="col">Source location</th>
                      <th scope="col">Destination location</th>
                      <th scope="col">Destination PinCode</th>
                      <th scope="col">Item Description</th>
                      <th scope="col">Approx weight (Kg)</th>

                      <th scope="col">Expected delivery date</th>
                      <th scope="col">Place Bid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adds.map((add) => (
                      <tr key={add.add_id}>
                        <td>{add.add_id}</td>
                        <td>{add.user.name}</td>

                        <td>{add.from_location}</td>
                        <td>{add.to_location}</td>
                        <td>{add.dest_pincode}</td>
                        <td>{add.item_description}</td>
                        <td>{add.approx_weight} Kg</td>
                        <td>{add.expected_deliveryDate}</td>

                        <td>
                          <Link
                            className="btn btn-info"
                            to={`/postbid/${add.add_id}`}
                          >
                            Bid
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div> </div>
        )}

        {/* ==================================================================================================
====================================================================================================== */}

        {/* {Transporter specific bids } */}
        {true ? (
          <div className="col-10 offset-1">
            <h1 className=" mb-3 text-center text-white fw-bold"></h1>
            <div class="card mb-2">
              <h5 class="card-header bg-dark bg-gradient text-light fs-4">
                Your Bids
              </h5>
              <div class="card-body bg-info bg-gradient shadow">
                <table
                  class="table table-hover bg-white table-bordered shadow "
                  style={{ tableLayout: "fixed" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">Bid_Id</th>
                      <th scope="col">Ad_Id</th>
                      <th scope="col">Ad_By</th>

                      <th scope="col">Bid By</th>
                      <th scope="col">Offer Price</th>
                      <th scope="col">Expected delivery date</th>
                      <th scope="col">Remark</th>
                      <th scope="col"> Status</th>

                      <th scope="col">View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((bid) => (
                      <tr key={bid.bid_id}>
                        <td>{bid.bid_id}</td>
                        <td>{bid.add.add_id}</td>
                        <td>{bid.add.user.name}</td>
                        <td>{bid.user.name}</td>
                        <td>{bid.offer_price}</td>
                        <td>{bid.estimated_deliveryDate}</td>
                        <td>{bid.remark}</td>
                        <td>
                          {bid.add.isPending ? (
                            <h4 className="badge bg-warning">Pending</h4>
                          ) : bid.bidFinalized ? (
                            <h4 className="badge bg-success">Accepted</h4>
                          ) : bid.user.isTransporter &
                            (bid.user.name !== transporterid) ? (
                            <h4 className="badge bg-danger">Rejected</h4>
                          ) : (
                            <h4 className="badge bg-warning">Pending</h4>
                          )}
                        </td>

                        <td>
                          {bid.bidFinalized ? (
                            <div>
                              <Link
                                className="btn btn-outline-success btn-sm badge-pill"
                                to={`/dealdetails/${bid.bid_id}`}
                              >
                                View Details
                              </Link>
                            </div>
                          ) : (
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-sm badge-pill"
                              onClick={() => deleteBid(bid.bid_id)}
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </>
  );
}
