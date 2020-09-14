import React from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default function Cart({ history }) {
  return (
    <section className="py-5">
      {/* title */}
      <div className="text-center">
        <h2>your cart items</h2>
      </div>
      
      <CartColumns />
     
      <CartList />
      
      <CartTotals history={history} />
    </section>
  );
}
