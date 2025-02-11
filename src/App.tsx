import Countdown from "./feautures/Countdown";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>} />
      <Route path="/count" element={<Countdown selectedDate={selectedDate} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
