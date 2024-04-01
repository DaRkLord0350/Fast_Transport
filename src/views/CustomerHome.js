import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";

export default function CustomerHome() {
  let navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [bidFlag, setBidFlag] = useState(false);
  const [adds, setAdds] = useState([]);
  const [bids, setBids] = useState([]);
  const [id, setid] = useState(0); // to fetch the adds

 
  useEffect(() => {
    if (localStorage.getItem("userdata") == null) {
      navigate("/login");
    } else {
      setid(JSON.parse(localStorage.getItem("userdata")).user_id);
      console.log(id);
    }
  }, []);

  function getYourAdds(e) {
    e.preventDefault();

    //showLoading();

    axios.get(`${url}/getyouradds/?userid=${id}`).then(
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

  function getBids(addid) {
    showLoading();
    //http://localhost:8081/getallbids/?addid=10
    axios.get(`${url}/getallbids/?addid=${addid}`).then(
      (response) => {
        Swal.showLoading();
        if (response.status == 200) {
          Swal.fire("Bids fetched", "  ", "success");
          setBidFlag(true);
          setBids(response.data);
        } else {
          Swal.fire("Something Went wrong", "Please try again !  ", "error");
        }
      },
      (error) => serverDownAlert()
    );
  }

  function deleteAdd(addid) {
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
        //http://localhost:8081/getallbids/?addid=10
        axios.delete(`${url}/deleteadd/?addid=${addid}`).then(
          (response) => {
            Swal.showLoading();
            if (response.data.status) {
              Swal.fire(
                "Deleted!",
                "Your Advertisement has been deleted.",
                "success"
              );
              setFlag(false);
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
      <div className="customerhomebg">
        <div className="" style={{ height: "70px" }}>
          {" "}
        </div>
        <div className="col-6 offset-3"><h1 className=" alert alert-warning">CustomerHome</h1></div>

        <Link to="/postadd" className="btn btn-info ">
          {" "}
          Post Add{" "}
        </Link>

        <button className="btn btn-info " onClick={getYourAdds}>
          {" "}
          View Your Adds{" "}
        </button>
        <button
          className="btn btn-danger "
          onClick={() => {
            setFlag(false);
            setBidFlag(false);
          }}
        >
          {" "}
          Clear Screen
        </button>

        {flag ? (
          <div class="container">
            <h1 className=" mb-3 text-center text-white fw-bold"></h1>
            <div class="card mb-2">
              <h5 class="card-header text-center bg-dark bg-gradient text-light fs-4">
                All Adds
              </h5>
              <div class="card-body bg-info bg-gradient shadow">
                <table
                  class="table table-hover bg-white table-bordered "
                  style={{ tableLayout: "fixed" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">Add_Id</th>
                      <th scope="col">Placed By</th>
                      <th scope="col">From Location</th>
                      <th scope="col">Delivery Location</th>
                      <th scope="col">Destination Pincode</th>
                      <th scope="col">Item description</th>
                      <th scope="col">approximate weight</th>

                      <th scope="col">Expected delivery date</th>
                      <th scope="col">View Bids</th>
                      <th scope="col"> Delete Add</th>
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
                          {add.bidFinalized ? (
                            <h5 className="text-muted">Accepted</h5>
                          ) : (
                            <button
                              type="button"
                              class="btn btn-outline-success btn-sm badge-pill"
                              onClick={() => getBids(add.add_id)}
                            >
                              view Bids
                            </button>
                          )}
                        </td>

                        <td>
                          {add.bidFinalized ? (
                            <div>
                              {" "}
                              <Link
                                className="btn btn-outline-success btn-sm badge-pill"
                                to={`/acceptoffer/0/${add.add_id}`}
                              >
                                View Details
                              </Link>
                            </div>
                          ) : (
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-sm badge-pill"
                              onClick={() => deleteAdd(add.add_id)}
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
          <div></div>
        )}

        {/* {   bidding       } */}
        {bidFlag ? (
          <div div className="container">
            <h1 className=" mb-3 text-center text-white fw-bold"></h1>
            <div class="card mb-2">
              <h5 class="card-header bg-success text-light fs-4">Bids for </h5>
              <div class="card-body">
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Bid_Id</th>
                      <th scope="col">Add_Id</th>
                      <th scope="col">Bid By</th>
                      <th scope="col">Offer Price</th>
                      <th scope="col">Expected deliv_date</th>
                      <th scope="col">Remark</th>
                      <th scope="col"> Accept Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((bid) => (
                      <tr key={bid.bid_id}>
                        <td>{bid.bid_id}</td>
                        <td>{bid.add.add_id}</td>
                        <td>{bid.user.name}</td>
                        <td>{bid.offer_price}</td>
                        <td>{bid.estimated_deliveryDate}</td>
                        <td>{bid.remark}</td>

                        <td>
                          <Link
                            className="btn btn-outline-danger btn-sm badge-pill"
                            to={`/acceptoffer/${bid.bid_id}`}
                          >
                            Accept Offer
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
          <div></div>
        )}
      </div>
    </>
  );
}
