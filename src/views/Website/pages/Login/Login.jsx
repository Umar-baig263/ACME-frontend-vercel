import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/Login/Section1";

const Login = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="login" isBanner={false} />
      <Section1/>
    </div>
  );
};

export default Login;
