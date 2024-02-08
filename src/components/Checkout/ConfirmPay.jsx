import { IoMdAdd, IoMdInformationCircle } from "react-icons/io";
import { RiShoppingBagFill } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { PiPiggyBank } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcApplePay, FaCcMastercard } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { SiFramework7 } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";


const data = {
    title: 'Free Cancellation',
    message: 'Tickets can be cancelled by 13th December, 2022'
}

const details = {
    title: "Enter your details",
    notification_message: "We'll be sending your tickets to the details below. Booking for a friend? Add their details."
}

const additionalInfo = {
    title: "Additional information",
    additional_info_message: "We need a few more details to complete your reservation."
}

const payment_mode = {
    title: "Select your mode of payment",
    message: "Payments with Tickete are secure and encrypted."
}

export default function ConfirmPay() {
  return (
    <div className='checkout-container p-10 flex justify-between sm:flex-wrap-reverse'>
        <div className='payment-details-container sm:basis-full md:flex-9/12 px-7'>
            <h2 className='font-roboto font-semibold text-4xl '>Confirm & Pay</h2>
            <div className="ticket-cancellation-container flex justify-between p-5 my-10 bg-slate-200">
                <div className=' flex flex-col gap-2'>
                    <div className="ticket-cancellation-title font-medium">
                        <p>{data.title}</p>
                    </div>
                    <div className="ticket-cancellation-message font-light">
                        <p>{data.message}</p>  
                    </div>
                </div>
                <div className="info-icon">
                    <IoMdInformationCircle />
                </div>
            </div>

           <hr />
            
            <div className="form-container mt-8">
                <h3 className='font-medium text-xl mb-3 '>{details.title}</h3>
                <p className='font-light'>{details.notification_message}</p>
                    <form action="" className='flex flex-col gap-3 mt-10 '>
                        <input type="text" name="" id="name" className='w-full border rounded-lg h-[56px] indent-2.5' placeholder='Full Name.' />
                        <div className="flex gap-3 flex-wrap md:flex-nowrap">
                            <input type="text" name="" id="" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow' placeholder='Country code' />
                            <input type="number" name="number" id="number" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow' placeholder='Phone number.' />
                        </div>
                        <div className="flex gap-3 flex-wrap md:flex-nowrap">
                            <input type="email" name="email" id="email" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow ' placeholder='Email.' />
                            <input type="email" name="email" id="email" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow' placeholder='Confirm email.' />
                        </div>
                    </form>
                    
            </div>
            {/* Addtional Information */}
            <div className="additional-form-container my-16">
                  <h3 className='font-medium text-xl mb-3 '>{additionalInfo.title}</h3>
                  <p className='font-light'>{additionalInfo.additional_info_message}</p>
                  <form action="" className='flex flex-col gap-3 mt-10 '>
                      <div className="flex gap-3 flex-wrap md:flex-nowrap">
                          <input type="text" name="" id="" className='flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow' placeholder='Input label' />
                          <select name="cars" id="cars" className="flex-1 border rounded-lg h-[56px] indent-2.5 w-full md:grow">
                              <option value="select">Select</option>
                              <option value="volvo">Volvo</option>
                              <option value="safari">Safari</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                          </select>
                      </div>
                      <select name="cars" id="cars" className='w-full border rounded-lg h-[56px] indent-2.5'>
                              <option value="multiselect">Multiselect</option>
                              <option value="volvo">Volvo</option>
                              <option value="tata">Tata</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                          </select>
                  </form>
            </div>

            <hr />

            {/* Payment through card details */}

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
        </div>
        
        <div className='payment-card-container sm:basis-full md:flex-3/12'>
            <div className='container  w-full h-[866px] border rounded-lg shadow-md p-5'>
                    <div className="product-details">
                        <div className="product-image">
                            <img src="" alt="" />
                        </div>
                        <div className="product-content">
                            <div className="rating">
                                <p>{`⭐4.9(4.5k) <category>`}</p>
                            </div>
                            <p>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>
                            <div className="booking-summary">
                                <div>
                                <BsTicketPerforatedFill />
                                    <p>{`<ticket type - variant>`}</p>
                                </div>
                                <div>
                                <MdOutlineDateRange />
                                    <div>
                                        <p>{`<day>, <month> <date>`}</p>
                                        <p>{`Duration: <duration>`}</p>
                                    </div>
                                </div>
                                <div>
                                <IoIosTime/>
                                    <div>
                                        <p>{`<time>`}</p>
                                        <p>{`Operating hours: <time> to <time>`}</p>
                                    </div>
                                </div>
                                <div>
                                    <BsFillPeopleFill/>
                                    <p>{`5 guests`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="payment-summary flex justify-between">
                        <p>View payment summary</p>
                        <IoMdAdd />
                    </div>
                    <hr />
                    <div className="total-amount-container">
                        <div className="total-payment-info-bottom flex flex-col justify-between gap-5">
                            <p className="font-light">By clicking “confirm & pay”, you agree to Tickete’s general terms and conditions and cancellation policy.</p>
                            <button 
                            className="bg-black border rounded-lg text-white h-[56px] w-[220px] flex justify-center items-center"> 
                            <RiShoppingBagFill className="inline mx-1"/>Confirm & Pay
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
