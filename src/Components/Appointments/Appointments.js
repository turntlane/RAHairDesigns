import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cuts from "./Cuts/Cuts";
import Hair from "./Hair/Hair";
import Extensions from "./Extensions/Extensions";
import Waxing from "./Waxing/Waxing";
import DateTimePicker from "react-datetime-picker";
import { cuts, hair, extensions, waxing } from "../Utils/Appt-info/appt-info";

function Appointments() {
  const [appt_time, setNewTime] = useState(new Date());
  const [startDate] = useState(new Date());
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState([]);
  const [cutOpen, setCutOpen] = useState(false);
  const [hairOpen, setHairOpen] = useState(false);
  const [waxingOpen, setWaxingOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(service);
    let FormData = { first_name, last_name, email, appt_time, service };
    await axios.post("http://localhost:5500/appointmentform", FormData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setNewTime("");
    setService([]);
  };

  const addService = (e) => {
    let name = e.target.value;
    setService((service) => [...service, name]);
    console.log(service);
  };

  const deleteService = (index) => {
    setService(service.filter((i) => i !== index));
    console.log(service);
  };

  return (
    <div>
      <input
        type="text"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        className="contact-input"
        placeholder="First Name"
      ></input>
      <input
        type="text"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
        className="contact-input"
        placeholder="Last Name"
      ></input>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="contact-email contact-input"
        placeholder="Email"
      ></input>
      <h1>SELECT A SERVICE</h1>
      <button onClick={() => setCutOpen(true)}>Cuts</button>
      {cutOpen
        ? cuts.map((cut, i) => (
            <label key={i}>
              {cut.name}
              <Cuts value={cut.name} onClick={addService}></Cuts>
              <button onClick={() => deleteService(cut.name)}>delete</button>
            </label>
          ))
        : null}
      <button onClick={() => setHairOpen(true)}>Hair</button>
      {hairOpen
        ? hair.map((hair, i) => (
            <label key={i}>
              {hair.name}
              <Hair value={hair.name} onClick={addService}></Hair>
              <button onClick={() => deleteService(hair.name)}>delete</button>
            </label>
          ))
        : null}

      <button onClick={() => setWaxingOpen(true)}>Waxing</button>
      {waxingOpen
        ? waxing.map((wax, i) => (
            <label key={i}>
              {wax.name}
              <Waxing value={wax.name} onClick={addService}></Waxing>
              <button onClick={() => deleteService(wax.name)}>delete</button>
            </label>
          ))
        : null}
      <Extensions />
      <DateTimePicker
        onChange={(e) => setNewTime(e)}
        value={appt_time}
        disableClock={true}
        autoFocus={true}
        isCalendarOpen={true}
        minDate={startDate}
        input={false}
        timeFormat="HH:mm:ss"
        timeConstraints={{
          hours: { min: 0, max: 23 },
          minutes: { min: 0, max: 59 },
          seconds: { min: 0, max: 59 },
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Appointments;
