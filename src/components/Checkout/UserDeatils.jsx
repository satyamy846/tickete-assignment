
const details = {
    title: "Enter your details",
    notification_message: "We'll be sending your tickets to the details below. Booking for a friend? Add their details."
}

const additionalInfo = {
    title: "Additional information",
    additional_info_message: "We need a few more details to complete your reservation."
}

export default function UserDeatils() {
  return (
    <>
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
    </>
  )
}
