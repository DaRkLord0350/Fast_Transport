import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../api/Url";
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from "../layout/Header.js";
import "./commonCSS.css";

export default function AdminHome() {
  let navigate = useNavigate();
  const [userflag, setuserflag] = useState(false);
  const [userlist, setuserlist] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userdata") == null) {
      navigate("/login");
    }
  }, []);

  function getAllUsers(e) {
    e.preventDefault();

    axios.get(`${url}/getallcustomers`).then(
      (response) => {
        if (response.data.length != 0) {
          setuserflag(true);
          setuserlist(response.data);
        } else {
          Swal.fire("Something Went wrong", "Please try again !  ", "error");
        }
      },
      (error) => serverDownAlert()
    );
  }

  function deleteRequest(userid) {
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
        axios.delete(`${url}/deleteuser/?id=${userid}`).then(
          (response) => {
            Swal.showLoading();
            if (response.data.status) {
              Swal.fire(
                "Deleted!",
                "Your Advertisement has been deleted.",
                "success"
              );
              setuserflag(false);
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
      <div className="adminhomebg ">
        <div className="" style={{ height: "70px" }}>
          {" "}
        </div>
        <h1 className="text-light"> Welcome, Admin</h1>
        <button className="btn btn-info" onClick={getAllUsers}>
          {" "}
          Get All Users
        </button>
        <button className="btn btn-danger " onClick={() => setuserflag(false)}>
          {" "}
          Clear Screen
        </button>

        {userflag ? (
          <div class="container">
            <h1 className=" mb-3 text-center text-white fw-bold"></h1>
            <div class="card mb-2">
              <h5 class="card-header bg-success text-light fs-4">All Users</h5>
              <div class="card-body">
                <table class="table table-hover table-bordered text-center ">
                  <thead>
                    <tr>
                      <th scope="col">User_Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">State</th>
                      <th scope="col">City</th>
                      <th scope="col">Role</th>

                      <th scope="col"> Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userlist.map((user) => (
                      <tr key={user.user_id}>
                        <td>{user.user_id}</td>
                        <td>{user.name}</td>

                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>
                          {user.isTransporter ? "Transporter" : "Customer"}{" "}
                        </td>

                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-success btn-sm badge-pill"
                            onClick={() => deleteRequest(user.user_id)}
                          >
                            Delete
                          </button>
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
