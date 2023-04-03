import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderCard } from "../components";
import { usePagination, useUserData } from "../hooks";
import { getUserOrders } from "../redux/actions/user";
import parsePhoneNumber from "libphonenumber-js";

const Profile = () => {
  const dispatch = useDispatch();
  const { list, totalCount } = useSelector((state) => state.user.orders);
  const pagination = usePagination(totalCount, 8);
  const user = useUserData();

  useEffect(() => {
    dispatch(getUserOrders(pagination.page, pagination.rowsPerPage));
  }, []);

  return (
    <div className="container profile">
      <h2 className="phone">
        Phone number:{" "}
        {parsePhoneNumber("+" + user.phoneNumber).formatInternational()}
      </h2>
      <div className="profile__orders">
        <h3>Orders</h3>
        <div className="orders__list">
          {list.length ? (
            list.map((item) =>
              item.OrderProducts?.length ? (
                <OrderCard className="orders__item" key={item.id} {...item} />
              ) : (
                ""
              )
            )
          ) : (
            <p>You don't have orders yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
