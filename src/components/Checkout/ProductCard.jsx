import { BsFillPeopleFill, BsTicketPerforatedFill } from "react-icons/bs";
import { IoIosTime, IoMdAdd } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import Carousel from "../Carousel";



export default function ProductCard() {
    const images = [{
        src:"https://images.unsplash.com/photo-1707129901265-c5bfee67a60b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt:""
    },
    {
        src:"https://images.unsplash.com/photo-1707129901265-c5bfee67a60b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt:""
    },
    {
        src:"https://images.unsplash.com/photo-1682695795798-1b31ea040caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt:""
    },]
  return (
    <>
        <div className='payment-card-container sm:basis-full md:flex-3/12'>
            <div className='w-fit h-fit border rounded-lg shadow-md p-5 flex flex-col gap-2'>
                    <div className="product-details">
                        {/* <div className="product-image w-[356px] h-[198px]">
                        <Carousel images={images}/>
                        </div> */}
                        <div className="product-content ">
                            <div className="rating">
                                <span>{`⭐4.9(4.5k)`}</span> <span className="font-light text-sm">{`<category>`}</span>
                            </div>
                            <p className="text-sm font-medium">Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>
                            <div className="booking-summary mt-2 flex flex-col gap-2 text-sm">
                                <div className="flex items-center gap-4">
                                <BsTicketPerforatedFill />
                                    <p>{`<ticket type - variant>`}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                <MdOutlineDateRange />
                                    <div>
                                        <p>{`<day>, <month> <date>`}</p>
                                        <p>{`Duration: <duration>`}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                <IoIosTime/>
                                    <div>
                                        <p>{`<time>`}</p>
                                        <p>{`Operating hours: <time> to <time>`}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
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
    </>
  )
}
