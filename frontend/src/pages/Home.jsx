import React from "react";
import SpeechRecorder from "../components/SpeechRecorder";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <SpeechRecorder />
    </div>
  );
};

export default Home;