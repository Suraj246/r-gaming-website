import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return <div style={{ fontSize: "15vw" }}>no page found</div>;
}

export default ErrorPage;
