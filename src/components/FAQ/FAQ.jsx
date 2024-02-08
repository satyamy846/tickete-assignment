import React from 'react'
// const questions = {
    
// }
export default function FAQ() {
  return (
    <div className='faq-container flex '>
        <h3>Frequently asked questions</h3>
        <p>Here are some of our most asked questions. </p>
        <div className="faq-bot-container">
            <h6>{`Still need help? We're here for you.`}
            </h6>
            <button>Chat with us</button>
        </div>
        <div className="faq-questions">
            <div>
                <h4>What should I do in my first trip to Rome?</h4>
                <p>{`Rome is packed with hidden gems. If you love art, 
                don't miss the Galleria Doria Pamphilj or Palazzo Barberini. 
                The Museo Barracco is a free museum and well worth a quick visit. 
                If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, 
                the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a 
                tour of Trastevere, a fascinating neighborhood full of history and ambiance.`}</p>
            </div>
            <div>
                <h4>What should I do in my first trip to Rome?</h4>
            </div>
            <div>
                <h4>What should I do in my first trip to Rome?</h4>
            </div>
            <div>
                <h4>What should I do in my first trip to Rome?</h4>
            </div>
        </div>
    </div>
  )
}
