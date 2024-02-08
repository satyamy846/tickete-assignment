import { IoMdInformationCircle } from "react-icons/io";
const data = {
    title: 'Free Cancellation',
    message: 'Tickets can be cancelled by 13th December, 2022'
}

const details = {
    title: "Enter your details",
    notification_message: "We'll be sending your tickets to the details below. Booking for a friend? Add their details."
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
                  <form action="" className='flex flex-col gap-3 mt-10 sm:flex-row xl:flex-col'>
                      <input type="text" name="" id="name" className='w-full border rounded-lg h-[56px] indent-2.5' placeholder='Full Name.' />
                      <div className="flex gap-3 xl:flex-col">
                          <input type="text" name="" id="" className='flex-1 border rounded-lg h-[56px] indent-2.5 sm:basis-full' placeholder='Country code' />
                          <input type="number" name="number" id="number" className='flex-1 border rounded-lg h-[56px] indent-2.5 sm:basis-full' placeholder='Phone number.' />
                      </div>
                      <div className="flex gap-3 xl:flex-col">
                          <input type="email" name="email" id="email" className='flex-1 border rounded-lg h-[56px] indent-2.5  sm:basis-full' placeholder='Email.' />
                          <input type="email" name="email" id="email" className='flex-1 border rounded-lg h-[56px] indent-2.5  sm:basis-full' placeholder='Confirm email.' />
                      </div>
                  </form>
                  
            </div>
        </div>
        <div className='payment-card-container sm:basis-full md:flex-3/12'>
            <div className='container bg-slate-400 w-full h-[866px] rounded-lg shadow-md'>
                    <h2>sfsdhfskjdfsdkjf</h2>
            </div>
        </div>
    </div>
  )
}
