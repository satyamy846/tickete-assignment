import ConfirmPay from "./components/Checkout/ConfirmPay";
import Navbar from "./components/Headers/Navbar/Navbar";
import UserMessage from "./components/Headers/SaleReminder/UserMessage";

export default function App() {
  return (
    <>
      <Navbar/>
      <UserMessage/>
      <ConfirmPay/>
    </>
  )
}
