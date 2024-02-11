import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import ChatBot from '../../assets/chat-bot-img.jpg';

const faq_questions = [
    {
        question: "What should I do in my first trip to Rome?",
        answer:`Rome is packed with hidden gems. If you love art, 
        don't miss the Galleria Doria Pamphilj or Palazzo Barberini. 
        The Museo Barracco is a free museum and well worth a quick visit. 
        If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, 
        the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a 
        tour of Trastevere, a fascinating neighborhood full of history and ambiance.`
    },
    {
        question: "What are some hidden gems to see in Rome?",
        answer:`Rome is packed with hidden gems. If you love art, don't miss the Galleria 
        Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well 
        worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at 
        Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden 
        gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.`
    },
    {
        question: "What should I do in my first trip to Rome?",
        answer:``
    },
    {
        question: "What food is Rome known for?",
        answer:``
    },
    {
        question: "What is the best way to get around Rome?",
        answer:``
    }





]



// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
export default function FAQ() {
    // font-weight: 600;
    // font-size: 1.4em;
    // font-family: open-sans;
    // line-height: 24px;
    // mb-23
  return (
    //w-[129px] h-[50px] 
    <>
    <hr />
    <div className='faq-container flex mt-20 justify-between p-8 items-center flex-col md:flex-row'>
        <div className='flex flex-col w-full md:w-6-12 p-2'>
        <div className='mb-5'>
        <h3 className='font-semibold text-xl '>Frequently asked questions</h3>
        <p className='font-light'>Here are some of our most asked questions. </p>
        </div>
        <div className="faq-bot-container bg-slate-200 rounded-lg w-fit h-fit flex justify-between p-8 gap-1 flex-wrap">
            <div>
            <h6 className='font-semibold text-lg mb-3'>{`Still need help? We're here for you.`}
            </h6>
            <button 
            className="bg-black rounded-lg text-white w-[129px] h-[50px]  flex justify-center items-center">
            Chat with us
            </button>
            </div>

            <div className='w-[157px] h-[100px] object-cover overflow-hidden rounded'>
            <img src={ChatBot} alt="chat-bot-img" />

            </div>
        </div>
        </div>
        <div className="faq-questions w-full md:w-6/12">
                  <Accordion >
                      {
                          faq_questions.map((item) => (
                              <>
                                  <AccordionItem className='p-5'>
                                      <AccordionItemHeading>
                                          <AccordionItemButton>
                                              {item.question}
                                          </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel className='rounded-lg '>
                                          <p>
                                              {item.answer}
                                          </p>
                                      </AccordionItemPanel>
                                  </AccordionItem>
                              </>
                          ))
                      }
        </Accordion>
        </div>
    </div>
    </>
  )
}
