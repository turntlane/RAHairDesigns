import React, { useState, useCallback } from "react";
import axios from "axios";
import Cuts from "./Cuts/Cuts";
import Hair from "./Hair/Hair";
import Extensions from "./Extensions/Extensions";
import Waxing from "./Waxing/Waxing";
import DateTimePicker from "react-datetime-picker";

function Appointments() {
  const [appt_time, setNewTime] = useState(new Date());
  const [startDate] = useState(new Date());
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [checked, setChecked] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let FormData = { first_name, last_name, email, appt_time, service };
    await axios.post("http://localhost:5500/appointmentform", FormData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setNewTime("");
    setService("");
  };

  const handleOnChange = useCallback(
      e => {
          const index = e.target.name
          let items = [...checked]
          items[index].isChecked = e.target.checked
          setChecked(items)
      }, [checked]
  )

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="contact-submit learn-more">
          Submit
        </button>
      <h1>SELECT A SERVICE</h1>
        <Cuts value={service} onChange={(e) => setService(e.target.value)} />
        <Hair />
        <Extensions />
        <Waxing />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointments;
