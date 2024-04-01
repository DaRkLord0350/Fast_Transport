import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginRouter = (props) => {
  const user = localStorage.getItem("userdata");
  const navigate = useNavigate();
  const [shouldRenderForm, setShouldRenderForm] = useState(false);

  useEffect(() => {
    if (user !== null) {
      handleNavigate();
    } else {
      const isLoggedInInNewTab = localStorage.getItem("isLoggedIn");
      if (isLoggedInInNewTab === "true") {
        localStorage.removeItem("isLoggedIn");
        navigate(`/`);
      } else {
        localStorage.setItem("isLoggedIn", "true");
        setTimeout(() => {
          setShouldRenderForm(true);
        }, 500);
      }
    }
  }, [user]);

  const handleNavigate = () => {
    const userRole = JSON.parse(localStorage.getItem("userdata")).role;
    navigate(`/${userRole}home`);
  };

  return shouldRenderForm ? <>{props.children}</> : null;
};

export default LoginRouter;
