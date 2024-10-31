import React, { useState, useEffect, useMemo } from "react";
import Charts from "./Charts";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";

const Session3 = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [screen,setScreen]=useState(true)
 
  const [popupCount, setPopupCount] = useState(0);
  const navigate =useNavigate() // Track the number of times the popup is shown

  // Define the messages for each time slot
  const timeSlotMessages = [
    { time: 0, message: "" },
    { time: 1, message: "Due to recessionary fears, the RBI shocks everyone by reducing the repo rate by 100 basis points. " },
    { time: 2, message: "Reiance Industries announces that it is entering the food delivery and quick commerce business. " },
    { time: 3, message: "According to reports, Tesla is set to acquire Maruti Suzuki. The acquisition is expected to command a significant prremium.  " },
    { time: 4, message: "The BJP defies expectations to win the Lok Sabha elections with a majority. " },
  ];

  // Memoize the datasets to prevent reference changes on each render
  

  const datasets2 = useMemo(() => [
    {
      name: "ONGC",
      data: [
        { time: 0, price: 305.27 },  // Replaced with value at column 20
        { time: 1, price: 300.0 },   // Arbitrary value
        { time: 2, price: 298.86 },  // Replaced with value at column 22
        { time: 3, price: 299.2 },   // Arbitrary value
        { time: 4, price: 289.59 },  // Replaced with value at column 24
        { time: 5, price: 300.0 },   // Arbitrary value
        { time: 6, price: 295.10 },  // Replaced with value at column 26
        { time: 7, price: 301.0 },   // Arbitrary value
        { time: 8, price: 296.28 },  // Replaced with value at column 28
        { time: 9, price: 305.0 },   // Arbitrary value
        { time: 10, price: 320.28 }, // Replaced with value at column 30
      ],
    },
    {
      name: "ITC",
      data: [
        { time: 0, price: 328.91 },  // Replaced with value at column 20
        { time: 1, price: 329.5 },   // Arbitrary value
        { time: 2, price: 341.08 },  // Replaced with value at column 22
        { time: 3, price: 342.0 },   // Arbitrary value
        { time: 4, price: 334.60 },  // Replaced with value at column 24
        { time: 5, price: 336.5 },   // Arbitrary value
        { time: 6, price: 330.25 },  // Replaced with value at column 26
        { time: 7, price: 331.0 },   // Arbitrary value
        { time: 8, price: 330.91 },  // Replaced with value at column 28
        { time: 9, price: 336.0 },   // Arbitrary value
        { time: 10, price: 341.50 }, // Replaced with value at column 30
      ],
    },
    {
      name: "Maruti Suzuki",
      data: [
        { time: 0, price: 11524.97 },  // Replaced with value at column 20
        { time: 1, price: 11600.5 },   // Arbitrary value
        { time: 2, price: 11052.45 },  // Replaced with value at column 22
        { time: 3, price: 11100.0 },   // Arbitrary value
        { time: 4, price: 10776.14 },  // Replaced with value at column 24
        { time: 5, price: 10880.0 },   // Arbitrary value
        { time: 6, price: 10808.47 },  // Replaced with value at column 26
        { time: 7, price: 11250.0 },   // Arbitrary value
        { time: 8, price: 12321.65 },  // Replaced with value at column 28
        { time: 9, price: 12500.0 },   // Arbitrary value
        { time: 10, price: 13775.61 }, // Replaced with value at column 30
      ],
    },
    {
      name: "Adani Enterprises",
      data: [
        { time: 0, price: 2476.72 },  // Replaced with value at column 20
        { time: 1, price: 2490.0 },   // Arbitrary value
        { time: 2, price: 2454.43 },  // Replaced with value at column 22
        { time: 3, price: 2440.0 },   // Arbitrary value
        { time: 4, price: 2339.07 },  // Replaced with value at column 24
        { time: 5, price: 2380.0 },   // Arbitrary value
        { time: 6, price: 2341.41 },  // Replaced with value at column 26
        { time: 7, price: 2400.0 },   // Arbitrary value
        { time: 8, price: 2397.60 },  // Replaced with value at column 28
        { time: 9, price: 2450.0 },   // Arbitrary value
        { time: 10, price: 2809.99 }, // Replaced with value at column 30
      ],
    },
    {
      name: "Hindustan Aeronautics",
      data: [
        { time: 0, price: 5332.98 },  // Replaced with value at column 20
        { time: 1, price: 5350.0 },   // Arbitrary value
        { time: 2, price: 5263.65 },  // Replaced with value at column 22
        { time: 3, price: 5280.0 },   // Arbitrary value
        { time: 4, price: 5142.59 },  // Replaced with value at column 24
        { time: 5, price: 5170.0 },   // Arbitrary value
        { time: 6, price: 5178.59 },  // Replaced with value at column 26
        { time: 7, price: 5185.0 },   // Arbitrary value
        { time: 8, price: 5199.30 },  // Replaced with value at column 28
        { time: 9, price: 5300.0 },   // Arbitrary value
        { time: 10, price: 5651.64 }, // Replaced with value at column 30
      ],
    },
    {
      name: "Jio Financial Services",
      data: [
        { time: 0, price: 374.60 },  // Replaced with value at column 20
        { time: 1, price: 376.0 },   // Arbitrary value
        { time: 2, price: 364.11 },  // Replaced with value at column 22
        { time: 3, price: 365.0 },   // Arbitrary value
        { time: 4, price: 352.82 },  // Replaced with value at column 24
        { time: 5, price: 360.0 },   // Arbitrary value
        { time: 6, price: 357.06 },  // Replaced with value at column 26
        { time: 7, price: 358.5 },   // Arbitrary value
        { time: 8, price: 353.49 },  // Replaced with value at column 28
        { time: 9, price: 360.0 },   // Arbitrary value
        { time: 10, price: 392.37 }, // Replaced with value at column 30
      ],
    },
    {
      name: "Tata Power",
      data: [
        { time: 0, price: 423.84 },  // Replaced with value at column 20
        { time: 1, price: 425.0 },   // Arbitrary value
        { time: 2, price: 417.94 },  // Replaced with value at column 22
        { time: 3, price: 420.0 },   // Arbitrary value
        { time: 4, price: 408.75 },  // Replaced with value at column 24
        { time: 5, price: 415.0 },   // Arbitrary value
        { time: 6, price: 407.11 },  // Replaced with value at column 26
        { time: 7, price: 409.0 },   // Arbitrary value
        { time: 8, price: 412.81 },  // Replaced with value at column 28
        { time: 9, price: 440.0 },   // Arbitrary value
        { time: 10, price: 451.62 }, // Replaced with value at column 30
      ],
    },
    {
      name: "InterGlobe Aviation",
      data: [
        { time: 0, price: 4854.50 },  // Replaced with value at column 20
        { time: 1, price: 4870.0 },   // Arbitrary value
        { time: 2, price: 4694.30 },  // Replaced with value at column 22
        { time: 3, price: 4800.0 },   // Arbitrary value
        { time: 4, price: 4530.00 },  // Replaced with value at column 24
        { time: 5, price: 4650.0 },   // Arbitrary value
        { time: 6, price: 4629.66 },  // Replaced with value at column 26
        { time: 7, price: 4740.0 },   // Arbitrary value
        { time: 8, price: 4615.77 },  // Replaced with value at column 28
        { time: 9, price: 4800.0 },   // Arbitrary value
        { time: 10, price: 4929.64 }, // Replaced with value at column 30
      ],
    },
    {
      "name": "Zomato",
      "data": [
        { "time": 0, "price": 296.99 },  // Value at column 20
        { "time": 1, "price": 298.00 },  // Arbitrary value
        { "time": 2, "price": 291.31 },  // Value at column 22
        { "time": 3, "price": 290.50 },  // Arbitrary value
        { "time": 4, "price": 282.31 },  // Value at column 24
        { "time": 5, "price": 280.00 },  // Arbitrary value
        { "time": 6, "price": 266.50 },  // Value at column 26
        { "time": 7, "price": 268.00 },  // Arbitrary value
        { "time": 8, "price": 263.30 },  // Value at column 28
        { "time": 9, "price": 273.00 },  // Arbitrary value
        { "time": 10, "price": 277.26}  // Value at column 30
      ]
    },
    {
      "name": "Asian Paints",
      "data": [
        { "time": 0, "price": 3093.61 },  // Value at column 20
        { "time": 1, "price": 3080.00 },  // Arbitrary value
        { "time": 2, "price": 3065.77 },  // Value at column 22
        { "time": 3, "price": 3040.00 },  // Arbitrary value
        { "time": 4, "price": 3007.52 },  // Value at column 24
        { "time": 5, "price": 3020.00 },  // Arbitrary value
        { "time": 6, "price": 3055.64 },  // Value at column 26
        { "time": 7, "price": 3070.00 },  // Arbitrary value
        { "time": 8, "price":3128.97 },  // Value at column 28
        { "time": 9, "price": 3150.00 },  // Arbitrary value
        { "time": 10, "price": 3279.17 }  // Value at column 30
      ]
    }

  ], []);
  
  const changeSession =()=>{
    navigate('/session2')
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
    {/* Render the Popup with the current message */}
    { screen ?
      <div className="fixed inset-0 bg-black opacity-100 z-50 "></div>:
      null}
      <Popup visible={popupVisible} message={currentMessage} />

      <div className="flex flex-wrap">
        {datasets2.map(({ name, data }, index) => (
          <div key={index} className="w-[25%] p-[2vh]">
            <Charts getData={data} name={name} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Session3;





