import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import logo from "../Assets/experianceshalaSquare.jpg";
import { toast } from "react-toastify";
import UseProfile from "../Hooks/UseProfile";
import { Box, Button } from "@chakra-ui/react";

export const Payments = ({price})=> {
    const {displayName, userEmail} =UseProfile()
   
  const Razorpay = useRazorpay();
  const handlePayment = useCallback(async (price) => {
    const order = {
      currency: "INR",
      receipt:Date.now(),
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: Number(price*100),
      currency: "INR",
      name: "Experience Shala Payment Portal",
      description: "Cart Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        toast.success("Payment Successful");
      },
      prefill: {
        name: displayName,
        email: userEmail,
        contact: "8637xxxxx6",
      },
      notes: {
        address: "Experence Shala Corporate Office",
      },
      theme: {
        color: "red",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  return (
    <Box >
    <Button colorScheme={"red"}
      onClick={() => {
        handlePayment(price);
        toast.success("Purchase completed"+"\n"+`Order Id ${Date.now()}`)
      }}
    >
      Confirm Payment
    </Button>
  </Box>
   );
}