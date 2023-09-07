import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import Registration from "../components/form";
import { dividerClasses } from "@mui/material";
import ActionAreaCard from "../components/card";

const Auth = () => {
  const userData = useSelector((state) => state.authentication.user);
  console.log("userData", userData);

  const dispatch = useDispatch();

  // const handleLogin = () => {
  //       username: username,
  //       password: password
  // };

  return (
    <div>
      {!userData ? <Registration /> : <ActionAreaCard userData={userData} />}
    </div>
  );
};

export default Auth;
