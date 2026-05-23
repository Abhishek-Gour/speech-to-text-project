import React, { useState } from "react";
import axios from "axios";

const SpeechRecorder = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join("");
    setText(transcript);
  };

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  const saveTranscript = async () => {
    await axios.post("http://localhost:5000/api/transcripts", { text });
    alert("Transcript saved!");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">🎤 Speech to Text</h1>
      <textarea
        className="w-full p-3 border rounded-lg mb-4"
        value={text}
        readOnly
      />
      <div className="flex gap-4">
        <button onClick={startListening} className="bg-green-500 text-white px-4 py-2 rounded">
          Start
        </button>
        <button onClick={stopListening} className="bg-red-500 text-white px-4 py-2 rounded">
          Stop
        </button>
        <button onClick={saveTranscript} className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default SpeechRecorder;