import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cuts from "./Cuts/Cuts";
import Hair from "./Hair/Hair";
import Extensions from "./Extensions/Extensions";
import Waxing from "./Waxing/Waxing";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cuts, hair, waxing, times } from "../Utils/Appt-info/appt-info";

function Appointments() {
  const [appt_date, setNewDate] = useState(null);
  const [appt_time, setNewTime] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState([]);
  const [cutOpen, setCutOpen] = useState(false);
  const [hairOpen, setHairOpen] = useState(false);
  const [waxingOpen, setWaxingOpen] = useState(false);
  const [dateChange, setDateChange] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [useDates, setUsedDates] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(service);
    let FormData = {
      first_name,
      last_name,
      email,
      appt_date,
      appt_time,
      service,
    };
    await axios.post("http://localhost:5500/appointmentform", FormData);
    setFormSubmitted(true)

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setNewTime("");
    // setNewDate("");
    // setService([]);
  };

  const handleDateChange = (date) => {
    setNewDate(date);
    setDateChange(true);
  };

  const handleTimeChange = (e) => {
    setNewTime(e.target.value);
    setDateChange(false);
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

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 1 && day !== 2;
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
      <DatePicker placeholderText="Choose a date" selected={appt_date} filterDate={isWeekday} minDate={new Date()} maxDate={new Date(new Date().setDate(new Date().getDate()+30))} onChange={handleDateChange} />
      {dateChange
        ? times.map((time, i) => (
            <button key={i} value={time.time} onClick={handleTimeChange}>
              {time.time}
            </button>
          ))
        : null}
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {formSubmitted ? (
        <div>
          <h1>Appointment Details</h1>
          <h1>{first_name}</h1>
          <h1>{last_name}</h1>
          <h1>{email}</h1>
          <h1>{service}</h1>
          {appt_date.toDateString()} at {appt_time.toString()}
        </div>
      ) : null}
    </div>
  );
}

export default Appointments;
