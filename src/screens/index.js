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

  const [isBackButtonClicked, setIsBackButtonClicked] = useState(false);

  return (
    <div>
      {!isBackButtonClicked ? (
        <Registration />
      ) : (
        <ActionAreaCard
          isBackButtonClicked={isBackButtonClicked}
          setIsBackButtonClicked={setIsBackButtonClicked}
          userData={userData}
        />
      )}
      {isBackButtonClicked && (
        <button onClick={() => setIsBackButtonClicked(false)}>Go Back</button>
      )}
    </div>
  );
};

export default Auth;
