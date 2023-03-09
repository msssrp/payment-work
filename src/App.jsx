import { Routes , Route } from "react-router-dom"
import PaymentGateway from "./components/PaymentGateway/PaymentGateway"
import Payment from "./components/PaymentTotal/Payment"
function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<PaymentGateway/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
     </Routes>
    </>
  )
}

export default App
