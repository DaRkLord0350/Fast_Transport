import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 500,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="App">
      <Stripe
        stripeKey="pk_test_51Mk9FSSGv9t25IAtDs5Kp6BE9MRoQk3QBxVSpNIQwRPWFJfA5wSXydJhYdAalc6RMA7kDFffJFEmnXxh0ezj5GGZ00sae1kYFt"
        token={handleToken}
      />
    </div>
  );
}
export default Payment;
