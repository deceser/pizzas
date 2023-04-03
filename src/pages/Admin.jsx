import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { AdminDashboard, LoginForm } from "../components";
import { useRole } from "../hooks";
import { resetPizzas } from "../redux/actions/pizzas";
import { ROLES } from "../utils/constants";

const Admin = () => {
  const dispatch = useDispatch();
  const userRole = useRole();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    dispatch(resetPizzas());
  }, []);

  useEffect(() => {
    if (userRole === ROLES.admin) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  }, [userRole]);

  return (
    <div className="wrapper">
      <div>
        <div className="container">
          {isAllowed ? <AdminDashboard outlet={<Outlet />} /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
