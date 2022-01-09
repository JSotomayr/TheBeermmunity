import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import CustomerCard from "../component/customerCard.jsx";
import "../../styles/allCustomers.scss";

const AllCustomers = () => {
  const { store, actions } = useContext(Context);
  const [customerList, setcustomerList] = useState([]);

  useEffect(() => {
    if (customerList.length === 0) {
      actions.getCustomers();
    }
  }, []);

  useEffect(() => {
    setcustomerList(
      store.allCustomers.map((customer, index) => {
        return <CustomerCard key={index.toString()} element={customer} />;
      })
    );
  }, [store.allCustomers]);

  return (
    <div>
      <h1 className="title">Todos los amantes de la cerveza</h1>
      <div className="allCustomers">{customerList}</div>
    </div>
  );
};

export default AllCustomers;
