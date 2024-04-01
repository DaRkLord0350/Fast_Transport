import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRouteCustomer = (props) => {
  const userRole = JSON.parse(localStorage.getItem("userdata")).role;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${userRole}home`);
  };

  useEffect(() => {
    if (userRole !== "customer") {
      alert("Access to page is denied");
      handleNavigate();
    }
  }, [navigate, userRole]);

  if (userRole !== "customer") {
    return null;
  }

  return <>{props.children}</>;
};

export default ProtectedRouteCustomer;
