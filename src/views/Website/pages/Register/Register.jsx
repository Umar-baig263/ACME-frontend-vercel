import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/Register/Section1";

const Register = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Register" isBanner={false} />
      <Section1/>
    </div>
  );
};

export default Register;
