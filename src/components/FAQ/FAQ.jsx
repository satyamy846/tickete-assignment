import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
export default function FAQ() {
  return (
    // <div className='faq-container flex '>
    //     <h3>Frequently asked questions</h3>
    //     <p>Here are some of our most asked questions. </p>
    //     <div className="faq-bot-container">
    //         <h6>{`Still need help? We're here for you.`}
    //         </h6>
    //         <button>Chat with us</button>
    //     </div>
    //     <div className="faq-questions">
    //         <div>
    //             <h4>What should I do in my first trip to Rome?</h4>
    //             <p>{`Rome is packed with hidden gems. If you love art, 
    //             don't miss the Galleria Doria Pamphilj or Palazzo Barberini. 
    //             The Museo Barracco is a free museum and well worth a quick visit. 
    //             If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, 
    //             the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a 
    //             tour of Trastevere, a fascinating neighborhood full of history and ambiance.`}</p>
    //         </div>
    //         <div>
    //             <h4>What should I do in my first trip to Rome?</h4>
    //         </div>
    //         <div>
    //             <h4>What should I do in my first trip to Rome?</h4>
    //         </div>
    //         <div>
    //             <h4>What should I do in my first trip to Rome?</h4>
    //         </div>
    //     </div>
    // </div>

    <>
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </>
  )
}
