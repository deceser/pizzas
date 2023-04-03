import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  CallBack,
  Delivery,
  Header,
  Modals,
  Orders,
  Products,
  Properties,
  ProtectedRoute,
  Statistics,
  Stock,
  Users,
} from "./components";
import { useRole } from "./hooks";
import {
  Admin,
  Home,
  Order,
  PageNotFound,
  PaymentPage,
  Profile,
  SignIn,
  SignUp,
} from "./pages";
import { ROLES } from "./utils/constants";
import "./index.scss";

function App() {
  const isAuth = useRole() !== ROLES.phantom;

  return (
    <div className="wrapper">
      <Modals />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        {/*<Route exact path="/cart" element={<CartOLD />} />*/}
        <Route exact path="/order/:id" element={<Order />} />
        <Route
          exact
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={[ROLES.admin]}>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route exact path="products" element={<Products />} />
          <Route exact path="orders" element={<Orders />} />
          <Route exact path="properties" element={<Properties />} />
          <Route exact path="stock" element={<Stock />} />
          <Route exact path="statistics" element={<Statistics />} />
          <Route exact path="users" element={<Users />} />
          <Route exact path="call" element={<CallBack />} />
          <Route exact path="delivery" element={<Delivery />} />
        </Route>
        <Route exact path="/auth">
          <Route
            exact
            path="sign-in"
            element={
              <ProtectedRoute mustBeAuth={false} isAuth={isAuth}>
                <SignIn />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="sign-up"
            element={
              <ProtectedRoute mustBeAuth={false} isAuth={isAuth}>
                <SignUp />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          exatc
          path="/profile"
          element={
            <ProtectedRoute mustBeAuth={true} isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
