import React,{useState} from "react";
import krungthep from "./logo/4fe3790fe4862ac3375a27120e6d8063.png"
import krungshi from "./logo/220456456.png"
import thaipanish from "./logo/280688579024211.png"
import krungthai from "./logo/Krung_Thai_Bank_logo.svg.png"
import kasikorn from "./logo/logo.png"
import ttb from "./logo/Ttb_bank_logo2.png"
import { Link } from "react-router-dom";


function PaymentGateway() {

    const [selectedBank, setSelectedBank] = useState(null);

    const [numberBank , setNumberbank] = useState(null)

    const [payment , setPayment ] = useState(null)

    const handleBankChange = (event) => {
        const bankValues = event.target.value.split(',');
        setSelectedBank(bankValues[0]);
        setNumberbank(bankValues[1]);
      }

      const handlePayment = (e)=>{
        setPayment(e.target.value)
      }

      

  return (
    <>
      <div class="min-w-screen min-h-screen  bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-[600px]"
         
        >
          <div class="w-full pt-1 pb-5">
            <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase">
              Payment Information
            </h1>
          </div>
          <div class="mb-3 flex -mx-2">
            <div class="px-2">
              <label for="type1" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  value={["Saim square","152-0-00000-1-7"]}
                    onChange={handleBankChange}
                />
                <img
                  src={krungthep}
                  class="h-8 ml-3"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type2" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                  value={["Sapan Lueng","131-1-000001-6"]}
                  onChange={handleBankChange}
                />
                <img
                  src={krungshi}
                  class="h-8 ml-3"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type3" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type3"
                  value={["Sapa karchatthai","045-2-35809-1"]}
                  onChange={handleBankChange}
                />
                <img
                  src={thaipanish}
                  class="h-8 ml-3"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type4" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type4"
                  value={["Sulawong","023-1-19265-7"]}
                  onChange={handleBankChange}
                />
                <img
                  src={krungthai}
                  class="h-8 ml-3"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type5" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type5"
                  value={["Sapan lueng","011-2-25379-3"]}
                  onChange={handleBankChange}
                />
                <img
                  src={kasikorn}
                  class="h-8 ml-3"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type6" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type6"
                  value={["Jamjuree sqaure","238-2-11007-6"]}
                  onChange={handleBankChange}
                />
                <img
                  src={ttb}
                  class="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Name</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder={selectedBank}
                type="text"
                disabled
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder={numberBank}
                type="text"
                disabled
              />
            </div>
          </div>
         
          <div class="mb-10">
            <label class="font-bold text-sm mb-2 ml-1">Pay</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                type="text"
                onChange={handlePayment}
              />
            </div>
          </div>
          <div>
            <Link to={{pathname:'/payment',
        search:`?bank=${selectedBank}&total=${payment}`}} class="block text-center w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </Link>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default PaymentGateway;
