import { CiCircleInfo, CiCreditCard1 } from 'react-icons/ci'
import { FaCcApplePay, FaCcDinersClub, FaCcMastercard, FaCcVisa, FaCircle, FaGooglePay } from 'react-icons/fa6'
import { IoMdInformationCircle } from 'react-icons/io'
import { PiPiggyBank } from 'react-icons/pi'
import { RiShoppingBagFill } from 'react-icons/ri'
import { SiFramework7 } from 'react-icons/si'

const payment_mode = {
    title: "Select your mode of payment",
    message: "Payments with Tickete are secure and encrypted."
}


export default function DebitCardDetails() {
  return (
    <>
        <div className="payment-option-container my-16">
                {/* Payment heading */}
                <h3 className='font-medium text-xl mb-3 '>{payment_mode.title}</h3>
                <p className='font-light'>{payment_mode.message}</p>

                {/* Payment method Card */}
                <div className="card-details-container flex flex-col border-2 rounded-lg my-10 p-5 gap-5">
                    <div className="card-details-title flex items-center gap-1">
                        <CiCreditCard1 />
                        <h3> Credit & debit card</h3>
                        <SiFramework7 className="self-end"/>
                    </div>
                    <div className="card-icons flex items-center gap-2">
                        <FaCcVisa/>
                        <FaCcMastercard/>
                        <FaCcDinersClub/>
                    </div>
                    {/* Payment card form (Card No, Name, Expiry) */}
                    <div className="card-details-form">
                    <form action="" className='flex flex-col gap-3 mt-10 '>
                        <div className="flex gap-3 flex-wrap md:flex-nowrap">
                            <input type="text" name="" id="" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow' placeholder='Name on Card' />
                            <input type="number" name="number" id="number" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow' placeholder='Card Number.' />
                        </div>
                        <div className="flex gap-3 flex-wrap md:flex-nowrap">
                            <input type="number" name="expire-date" id="expire-date" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow ' placeholder='Expiry Date' />
                            <input type="number" name="number" id="number" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow' placeholder='CVV' />
                        </div>
                    </form>
                    </div>
                    {/* Payment card form end */}
                    <hr />
                    <div className="total-payment-info flex flex-col gap-5">
                        <div className="total-payment-info-top flex flex-col gap-5">
                            <div className="flex justify-between mt-3">
                                <h3 className="font-bold">Total payable: $XXX</h3>
                                <div className="save-price bg-green-600 border rounded-lg h-fit text-white">
                                    <p className="h-fit flex justify-center items-center "><PiPiggyBank className="inline"/>{`Your save <price>`}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="inline">You will be charged in AED</p>
                                <CiCircleInfo className="inline"/>
                            </div>
                        </div>
                        <div className="total-payment-info-bottom flex flex-col justify-between gap-5">
                            <p className="font-light">By clicking “confirm & pay”, you agree to Tickete’s general terms and conditions and cancellation policy.</p>
                            <button 
                            className="bg-black border rounded-lg text-white h-[56px] w-[220px] flex justify-center items-center"> 
                            <RiShoppingBagFill className="inline mx-1"/>Confirm & Pay
                            </button>
                        </div>
                    </div>
                </div>
                  <div className="comming-soon-container flex justify-between items-center border rounded-lg p-3">
                      <FaCcApplePay />
                      <p className="font-light">Coming Soon</p>
                      <FaCircle />
                  </div>
                  <div className="comming-soon-container flex justify-between items-center border rounded-lg p-3 mt-2">
                      <FaGooglePay />
                      <p className="">Coming Soon</p>
                      <FaCircle />
                </div>
                <hr />
                {/* Final Amount summary */}
                <div className="final-amount mt-10">
                <h3 className="font-bold text-xl my-3">Total payable: $XXX</h3>
                <div className="flex justify-between border rounded-lg p-6">
                    <IoMdInformationCircle />
                    <div className="flex flex-col">
                        <p className="font-medium">You will be charged in AED</p>
                        <p className="font-light">The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
                    </div>
                    
                </div>
                </div>
            </div>
    </>
  )
}
