import React, { useEffect } from "react";
import { withRouter } from "./with-router";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = props.router.location;

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        const decodedJwt = parseJwt(parsedUser.accessToken);

        if (decodedJwt && decodedJwt.exp * 1000 < Date.now()) {
          props.logOut();
        }
      } catch (e) {
        console.error("Failed to parse user or JWT", e);
        props.logOut();
      }
    }
  }, [location, props]);

  return <div></div>;
};

export default withRouter(AuthVerify);