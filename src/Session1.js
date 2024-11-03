import React, { useState, useEffect, useMemo } from "react";
import Charts from "./Charts";
import Popup from "./Popup";
import { Link, useNavigate } from "react-router-dom";


const Session1 = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [screen,setScreen]=useState(true)
 
  const [popupCount, setPopupCount] = useState(0);
  const [button,setButton]=useState(false);
  const navigate = useNavigate() // Track the number of times the popup is shown

  // Define the messages for each time slot
  const timeSlotMessages = [
    { time: 0, message: "" },
    { time: 1, message: "HAL announced the succesful testing of its new 5th generation fighter jet. The Indian Air Force has ordered 108 of these jets." },
    { time: 2, message: "Tata Power has announced the permanent closure of its Mundra powerplant. " },
    { time: 3, message: "Hindenburg is back! Their accusations against the Adani Group are bigger than ever. " },
    { time: 4, message: "InterGlobe Aviation is expanding its long-haul routes from India to Europe and North America. They will be a major competitor to the gulf carriers." },
  ];

  // Memoize the datasets to prevent reference changes on each render
  const datasets = useMemo(() => [
    {
      name: "ONGC",
      data: [
        { time: 0, price: 300.0 },
        { time: 1, price: 299.0 }, // New arbitrary time slot
        { time: 2, price: 298.5 },
        { time: 3, price: 299.2 }, // New arbitrary time slot
        { time: 4, price: 300.89 },
        { time: 5, price: 300.0 }, // New arbitrary time slot
        { time: 6, price: 299.68 },
        { time: 7, price: 301.0 }, // New arbitrary time slot
        { time: 8, price: 303.28 },
        { time: 9, price: 305.0 }, // New arbitrary time slot
        { time: 10, price: 306.01 },
      ],
      range:0.1,
    },
    {
      name: "ITC",
      data: [
        { time: 0, price: 500.0 },
        { time: 1, price: 500.8 }, // New arbitrary time slot
        { time: 2, price: 496 },
        { time: 3, price: 502.5 }, // New arbitrary time slot
        { time: 4, price: 501.95 },
        { time: 5, price: 503.0 }, // New arbitrary time slot
        { time: 6, price: 504.46 },
        { time: 7, price: 501.0 }, // New arbitrary time slot
        { time: 8, price: 500.43 },
        { time: 9, price: 498.0 }, // New arbitrary time slot
        { time: 10, price: 500.93 },
      ],
      range:0.4,
    },
    {
      name: "Maruti Suzuki",
      data: [
        { time: 0, price: 12500.0 },
        { time: 1, price: 12530.5 }, // New arbitrary time slot
        { time: 2, price: 12612.5 },
        { time: 3, price: 12490.0 }, // New arbitrary time slot
        { time: 4, price: 12360.3 },
        { time: 5, price: 12280.0 }, // New arbitrary time slot
        { time: 6, price: 12197.1 },
        { time: 7, price: 12350.0 }, // New arbitrary time slot
        { time: 8, price: 12416.6 },
        { time: 9, price: 12550.0 }, // New arbitrary time slot
        { time: 10, price: 12602.9 },
      ],
      range:0.15,
    },
    {
      name: "Adani Enterprises",
      data: [
        { time: 0, price: 3100.0 },
        { time: 1, price: 3110.0 }, // New arbitrary time slot
        { time: 2, price: 3103.10 },
        { time: 3, price: 3095.0 }, // New arbitrary time slot
        { time: 4, price: 3115.51 },
        { time: 5, price: 3080.0 }, // New arbitrary time slot
        { time: 6, price: 3068.78 },
        { time: 7, price: 2940.0 }, // New arbitrary time slot
        { time: 8, price: 2823.28 },
        { time: 9, price: 2800.0 }, // New arbitrary time slot
        { time: 10, price: 2766.81 },
      ],
      range:0.25,
    },
    {
      name: "Hindustan Aeronautics",
      data: [
        { time: 0, price: 4500.0 },
        { time: 1, price: 4475.0 }, // New arbitrary time slot
        { time: 2, price: 4432.50 },
        { time: 3, price: 4800.0 }, // New arbitrary time slot
        { time: 4, price: 5053.05 },
        { time: 5, price: 5130.0 }, // New arbitrary time slot
        { time: 6, price: 5204.64 },
        { time: 7, price: 5160.0 }, // New arbitrary time slot
        { time: 8, price: 5074.53 },
        { time: 9, price: 5100.0 }, // New arbitrary time slot
        { time: 10, price: 5140.49 },
      ],
      range:0.3,
    },
    {
      name: "Jio Financial Services",
      data: [
        { time: 0, price: 350.0 },
        { time: 1, price: 352.0 }, // New arbitrary time slot
        { time: 2, price: 353.50 },
        { time: 3, price: 351.0 }, // New arbitrary time slot
        { time: 4, price: 349.97 },
        { time: 5, price: 355.0 }, // New arbitrary time slot
        { time: 6, price: 355.28 },
        { time: 7, price: 352.0 }, // New arbitrary time slot
        { time: 8, price: 356.00 },
        { time: 9, price: 349.5 }, // New arbitrary time slot
        { time: 10, price: 348.88 },
      ],
      range:0.15,
    },
    {
      name: "Tata Power",
      data: [
        { time: 0, price: 450.0 },
        { time: 1, price: 451.5 }, // New arbitrary time slot
        { time: 2, price: 452.25 },
        { time: 3, price: 456.0 }, // New arbitrary time slot
        { time: 4, price: 463.56 },
        { time: 5, price: 440.0 }, // New arbitrary time slot
        { time: 6, price: 431.11 },
        { time: 7, price: 425.0 }, // New arbitrary time slot
        { time: 8, price: 422.49 },
        { time: 9, price: 430.0 }, // New arbitrary time slot
        { time: 10, price: 431.78 },
      ],
      range:0.15,
    },
    {
      name: "InterGlobe Aviation",
      data: [
        { time: 0, price: 5000.0 },
        { time: 1, price: 4970.0 }, // New arbitrary time slot
        { time: 2, price: 4960.0 },
        { time: 3, price: 4950.0 }, // New arbitrary time slot
        { time: 4, price: 4935.20 },
        { time: 5, price: 5020.0 }, // New arbitrary time slot
        { time: 6, price: 4971.23 },
        { time: 7, price: 5090.0 }, // New arbitrary time slot
        { time: 8, price: 5070.65 },
        { time: 9, price: 5100.0 }, // New arbitrary time slot
        { time: 10, price: 5390.10 },
      ],
      range:0.1,
    },
    {
      name: "Zomato",
      data: [
        { time: 0, price: 300.0 },
        { time: 1, price: 302.0 }, // New arbitrary time slot
        { time: 2, price: 300.60 },
        { time: 3, price: 304.0 }, // New arbitrary time slot
        { time: 4, price: 305.11 },
        { time: 5, price: 307.0 }, // New arbitrary time slot
        { time: 6, price: 303.28 },
        { time: 7, price: 303.5 }, // New arbitrary time slot
        { time: 8, price: 306.16 },
        { time: 9, price: 302.0 }, // New arbitrary time slot
        { time: 10, price: 301.87 },
      ],
      range:0.15,
    },
    {
      name: "Asian Paints",
      data: [
        { time: 0, price: 3000.0 },
        { time: 1, price: 3030.0 }, // New arbitrary time slot
        { time: 2, price: 3045.0 },
        { time: 3, price: 3035.0 }, // New arbitrary time slot
        { time: 4, price: 3048.05 },
        { time: 5, price: 3060.0 }, // New arbitrary time slot
        { time: 6, price: 3020.61 },
        { time: 7, price: 3100.0 }, // New arbitrary time slot
        { time: 8, price: 3081.02 },
        { time: 9, price: 3115.0 }, // New arbitrary time slot
        { time: 10, price: 3121.08 },
      ],
      range:0.1,
    },
  ],[]);

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

  const changeSession =()=>{
    const audio = new Audio('/sound.mov');
    audio.play();

    navigate('/session2')
  }

  // Get the message for the current time slot based on the popup count
  const currentMessage =
    timeSlotMessages[popupCount % timeSlotMessages.length]?.message || "No message";

  return (
    <div>      
      {/* Render the Popup with the current message */}
    
      <Popup visible={popupVisible} message={currentMessage} />
      <div className="flex flex-wrap">
        {datasets.map(({ name, data , range }, index) => (
          <div key={index} className="w-[25%] py-[2vh] px-[1.2vh]">
            <Charts getData={data} name={name} range={range} />
          </div>
        ))}
        <div className="flex justify-center items-center mx-auto">
        {
          button ?
        
         <button  onClick={changeSession} className="btn btn-outline btn-info z-50 animate-fadeIn">Next Session</button>
      
         : null
        }
         </div>
      </div>
     
    </div>
  );
};

export default Session1;





