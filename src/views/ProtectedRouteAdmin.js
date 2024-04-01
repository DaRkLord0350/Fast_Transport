import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRouteAdmin = (props) => {
  const userRole = JSON.parse(localStorage.getItem("userdata")).role;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${userRole}home`);
  };

  useEffect(() => {
    if (userRole !== "admin") {
      alert("Access to page is denied");
      handleNavigate();
    }
  }, [navigate, userRole]);

  if (userRole !== "admin") {
    return null;
  }

  return <>{props.children}</>;
};

export default ProtectedRouteAdmin;
