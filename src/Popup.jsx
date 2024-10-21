import React from "react";

const Popup = ({ visible, message }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed z-50 bottom-[12vh] left-[65%] transform -translate-x-1/4 p-4 bg-white text-black rounded shadow-lg
        transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Popup;
