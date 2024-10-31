import React, { useState, useEffect, useMemo } from "react";
import Charts from "./Charts";
import Popup from "./Popup";
import { Link, useNavigate } from "react-router-dom";

const Session2 = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [screen,setScreen]=useState(true)
 
  const [popupCount, setPopupCount] = useState(0);
  const [button,setButton]=useState(false);
  const navigate=useNavigate() // Track the number of times the popup is shown

  // Define the messages for each time slot
  const timeSlotMessages = [
    { time: 0, message: "Government puts a ban on sale of cigarettes" },
    { time: 1, message: "Iran and Russia decide to join forces against Israel and Ukraine. It is largely expected that the US will officially enter the war, trigerring a global " },
    { time: 2, message: "Jio Financial Services will be partnering with JP Morgan to enter into the Investment Banking space. " },
    { time: 3, message: "Asian Paints declares its Q3 results. Revenues and Profits blew past analyst expectations" },
    { time: 4, message: "Due to the war, crude oil has crossed $100 a barrel." },
  ];

  // Memoize the datasets to prevent reference changes on each render
  

  const datasets1 = useMemo(() => [
    {
        name: "ONGC",
        data: [
          { time: 0, price: 306.01 },
          { time: 1, price: 305.5 }, // Arbitrary value
          { time: 2, price: 303.87 },
          { time: 3, price: 302.1 }, // Arbitrary value
          { time: 4, price: 278.34 },
          { time: 5, price: 280.0 }, // Arbitrary value
          { time: 6, price: 287.25 },
          { time: 7, price: 288.0 }, // Arbitrary value
          { time: 8, price: 286.10 },
          { time: 9, price: 294.0 }, // Arbitrary value
          { time: 10, price: 305.27 }
        ]
      },
      {
        name: "ITC",
        data: [
          { time: 0, price: 500.93 },
          { time: 1, price: 450.0 }, // Arbitrary value
          { time: 2, price: 400.74 },
          { time: 3, price: 380.0 }, // Arbitrary value
          { time: 4, price: 331.81 },
          { time: 5, price: 325.0 }, // Arbitrary value
          { time: 6, price: 311.90 },
          { time: 7, price: 310.0 }, // Arbitrary value
          { time: 8, price: 324.69 },
          { time: 9, price: 325.0 }, // Arbitrary value
          { time: 10, price: 328.91 }
        ]
      },
      {
        name: "Maruti Suzuki",
        data: [
          { time: 0, price: 12502.91 },
          { time: 1, price: 12480.0 }, // Arbitrary value
          { time: 2, price: 12451.66 },
          { time: 3, price: 12200.0 }, // Arbitrary value
          { time: 4, price: 11069.52 },
          { time: 5, price: 11100.0 }, // Arbitrary value
          { time: 6, price: 11290.91 },
          { time: 7, price: 11400.0 }, // Arbitrary value
          { time: 8, price: 11629.64 },
          { time: 9, price: 11600.0 }, // Arbitrary value
          { time: 10, price: 11524.97 }
        ]
      },      
      {
        name: "Adani Enterprises",
        data: [
          { time: 0, price: 2766.81 },
          { time: 1, price: 2770.0 }, // Arbitrary value
          { time: 2, price: 2849.82 },
          { time: 3, price: 2755.0 }, // Arbitrary value
          { time: 4, price: 2436.59 },
          { time: 5, price: 2400.0 }, // Arbitrary value
          { time: 6, price: 2395.17 },
          { time: 7, price: 2400.0 }, // Arbitrary value
          { time: 8, price: 2522.11 },
          { time: 9, price: 2530.0 }, // Arbitrary value
          { time: 10, price: 2476.72 }
        ]
      },
      {
        name: "Hindustan Aeronautics",
        data: [
          { time: 0, price: 5140.49 },
          { time: 1, price: 5110.0 }, // Arbitrary value
          { time: 2, price: 5099.37 },
          { time: 3, price: 5100.0 }, // Arbitrary value
          { time: 4, price: 5201.36 },
          { time: 5, price: 5210.0 }, // Arbitrary value
          { time: 6, price: 5414.61 },
          { time: 7, price: 5420.0 }, // Arbitrary value
          { time: 8, price: 5311.74 },
          { time: 9, price: 5320.0 }, // Arbitrary value
          { time: 10, price: 5332.98 }
        ]
      },
      {
        name: "Jio Financial Services",
        data: [
          { time: 0, price: 348.88 },
          { time: 1, price: 355.0 }, // Arbitrary value
          { time: 2, price: 349.57 },
          { time: 3, price: 335.0 }, // Arbitrary value
          { time: 4, price: 322.66 },
          { time: 5, price: 323.0 }, // Arbitrary value
          { time: 6, price: 341.37 },
          { time: 7, price: 342.0 }, // Arbitrary value
          { time: 8, price: 368.34 },
          { time: 9, price: 369.0 }, // Arbitrary value
          { time: 10, price: 374.60 }
        ]
      },
      {
        name: "Tata Power",
        data: [
          { time: 0, price: 431.78 },
          { time: 1, price: 432.0 }, // Arbitrary value
          { time: 2, price: 436.53 },
          { time: 3, price: 429.0 }, // Arbitrary value
          { time: 4, price: 409.90 },
          { time: 5, price: 410.0 }, // Arbitrary value
          { time: 6, price: 417.69 },
          { time: 7, price: 416.0 }, // Arbitrary value
          { time: 8, price: 414.35 },
          { time: 9, price: 415.0 }, // Arbitrary value
          { time: 10, price: 423.88 }
        ]
      }, 
      {
        name: "InterGlobe Aviation",
        data: [
          { time: 0, price: 5390.10 },
          { time: 1, price: 5400.0 }, // Arbitrary value
          { time: 2, price: 5514.07 },
          { time: 3, price: 5520.0 }, // Arbitrary value
          { time: 4, price: 5001.27 },
          { time: 5, price: 5005.0 }, // Arbitrary value
          { time: 6, price: 4891.24 },
          { time: 7, price: 4900.0 }, // Arbitrary value
          { time: 8, price: 5067.32 },
          { time: 9, price: 4950.0 }, // Arbitrary value
          { time: 10, price: 4854.50 }
        ]
    },      
    {
      name: "Zomato",
      data: [
        { time: 0, price: 301.87 },
        { time: 1, price: 302.0 }, // New arbitrary time slot
        { time: 2, price: 300.97 },
        { time: 3, price: 289.92 }, // New arbitrary time slot
        { time: 4, price: 284.41},
        { time: 5, price: 290.0 }, // New arbitrary time slot
        { time: 6, price: 285.55 },
        { time: 7, price: 303.5 }, // New arbitrary time slot
        { time: 8, price: 296.69 },
        { time: 9, price: 302.0 }, // New arbitrary time slot
        { time: 10, price: 296.99 },
      ],
    },
    {
        name: "Asian Paints",
        data: [
          { time: 0, price: 3121.08 },
          { time: 1, price: 3125.0 }, // Arbitrary value
          { time: 2, price: 3142.93 },
          { time: 3, price: 3150.0 }, // Arbitrary value
          { time: 4, price: 2944.92 },
          { time: 5, price: 2950.0 }, // Arbitrary value
          { time: 6, price: 2971.43 },
          { time: 7, price: 3080.0 }, // Arbitrary value
          { time: 8, price: 3209.14 },
          { time: 9, price: 3190.0 }, // Arbitrary value
          { time: 10, price: 3093.61 }
        ]
      }
      
  ],[]);

  const changeSession =()=>{
    navigate('/session3')
  }
  useEffect(()=>{
    setTimeout(()=>{
      setScreen(false);
    },3500)
  },[])
 
  useEffect(() => {
    // Set interval to trigger the popup every 2 seconds
    const intervalId = setInterval(() => {
      if (popupCount < 4) {
        setPopupVisible(true);
        setPopupCount(prev => prev + 1);

        // Hide popup after a short delay (e.g., 1 second)
        setTimeout(() => setPopupVisible(false), 10000);
      } else {
        setButton(true)
        clearInterval(intervalId);
      }
    }, 120000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, [popupCount]);

  // Get the message for the current time slot based on the popup count
  const currentMessage =
    timeSlotMessages[popupCount % timeSlotMessages.length]?.message || "No message";

  return (
    <div>
      
      { screen ?
      <div className="fixed inset-0 bg-black opacity-100 z-50 "></div>:
      null}

      {/* Render the Popup with the current message */}
      <Popup visible={popupVisible} message={currentMessage} />

      <div className="flex flex-wrap">
        {datasets1.map(({ name, data }, index) => (
          <div key={index} className="w-[25%] p-[2vh]">
            <Charts getData={data} name={name} />
          </div>
        ))}
        <div className="flex justify-center items-center mx-auto">
        {
          button ?
          <button  onClick={changeSession} className="btn btn-outline btn-info z-50">Next Session</button>
         : null
        }
         </div>
        
      </div>
      
    </div>
  );
};

export default Session2;





