import ProductCard from "./ProductCard";
import DebitCardDetails from "./DebitCardDetails";
import UserDeatils from "./UserDeatils";
import { IoMdInformationCircle } from "react-icons/io";


const data = {
    title: 'Free Cancellation',
    message: 'Tickets can be cancelled by 13th December, 2022'
}



export default function ConfirmPay() {
    return (
        <div className='checkout-container p-10 flex justify-between flex-wrap-reverse lg:flex-row'>
            <div className='payment-details-container sm:basis-full md:flex-9/12 px-7 mt-8'>
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
                {/* User information form */}
                <hr />
                <UserDeatils />
                <hr />

                {/* Payment through card details */}
                <DebitCardDetails />
            </div>
            {/* Right side Payment card container */}
            <ProductCard />
        </div>
    )
}
