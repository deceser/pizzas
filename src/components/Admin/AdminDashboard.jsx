import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../ui";

const AdminDashboard = ({ outlet }) => {
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.admin);
  const items = [
    "Orders",
    "Products",
    "Properties",
    "Stock",
    "Delivery",
    "Users",
    "Call",
    "Statistics",
  ];
  const [activeNavbarItem, setActiveNavbarItem] = useState(items[0]);

  const path = useLocation().pathname.split("/");
  const route = path[path.length - 1];

  useEffect(() => {
    if (route === "admin") {
      navigate("/admin/orders");
    }
    setActiveNavbarItem(route);
  }, [route]);

  //FIX router-dom warning on navigation

  const onNavbarChange = (item) => {
    setActiveNavbarItem(item);
    navigate("/admin/" + item.toLowerCase());
  };

  return (
    <div className="admin-dashboard">
      <Navbar
        items={items}
        activeItem={activeNavbarItem}
        onItemClick={onNavbarChange}
      />
      {error && (
        <div className="admin-dashboard__message">
          <span className="error">{error}</span>
        </div>
      )}

      <div className="admin-dashboard__content">{outlet}</div>
    </div>
  );
};

export default AdminDashboard;
