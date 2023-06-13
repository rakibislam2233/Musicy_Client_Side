import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../../../Component/Context/AuthProvider";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ enrolledClass, price }) => {
  const Navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(UserContext);
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        (res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      ("error", error);
      toast.error(error.message);
    } else {
      ("payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    (paymentIntent);
    if (confirmError) {
      toast.error(confirmError.message);
      (confirmError);
    }

    ("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      if (paymentIntent.id) {
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank You Payment  Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const payment = {
        userEmail: user?.email,
        transactionId: paymentIntent.id,
        price,
        image: enrolledClass.image,
        selectedId: enrolledClass.selectedId,
        classId: enrolledClass._id,
        className: enrolledClass.className,
        instructorName: enrolledClass.instructorName,
        paymentStatus: "successful",
        date,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        (res.data);
      });
      Navigate("/dashboard/student");
    }
  };

  return (
    <>
      <form className="w-2/3 m-8 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          className="w-full boder border-2 p-5 border-amber-500 rounded-xl"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/*  */}
        <button
          disabled={!stripe || !clientSecret || processing}
          className="py-2 w-full rounded-2xl px-5 bg-amber-500 mt-4 font-semibold text-white"
          type="submit"
        >
          Pay Now
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
