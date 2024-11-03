import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartSession = () => {
    // Play sound
    const audio = new Audio('src/Audio/sound.mov');
    audio.play();

    // Navigate to session1
    navigate('/session1');
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url(../public/bg3.jpg)",
        }}
      ></div>

      {/* Button Content */}
      <div className="relative z-10">
        <button
          onClick={handleStartSession}
          className="btn btn-lg glass px-20 animate-fadeIn"
        >
          Start Session
        </button>
      </div>
    </div>
  );
}

export default Home;
