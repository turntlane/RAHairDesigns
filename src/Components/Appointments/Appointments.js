import React, { useState, useEffect } from "react";
import axios from "axios";
import Cuts from "./Cuts/Cuts";
import Hair from "./Hair/Hair";
import Extensions from "./Extensions/Extensions";
import Waxing from "./Waxing/Waxing";
import DateTimePicker from "react-datetime-picker";
import { cuts } from "../Utils/Appt-info/appt-info";


function Appointments() {
  const [appt_time, setNewTime] = useState(new Date());
  const [startDate] = useState(new Date());
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState([]);
  const [checked, setChecked] = useState({});
  const [cutOpen, setCutOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(checked)
    let FormData = { first_name, last_name, email, appt_time, checked };
    await axios.post("http://localhost:5500/appointmentform", FormData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setNewTime("");
    setChecked({});
  };


  const handleChange = (e) => {
    if (e.target.type === 'checkbox' && !e.target.checked) {
      setChecked({...checked, [e.target.value]: null});
  } else {
      setChecked({...checked, [e.target.name]: e.target.value });
  }
}

  // const handleChange = (e) => {
  //   if (checked.includes(e.target.value)) {
  //     setChecked(checked.filter(check => check.value !== e.target.value))
  //   }else {
  //     setChecked([...checked, e.target.name])
  //   }
  // }

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
        {/* <h1>Cuts</h1> */}
        <button onClick={() => setCutOpen(true)}>Cuts</button>
        {cutOpen
          ? cuts.map((cut, i) => (
              <label key={i}>
                {cut.name}
                <Cuts
                  type="checkbox"
                  value={cut.name}
                  checked={checked}
                  onChange={handleChange}
                ></Cuts>
              </label>
            ))
          : null}

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
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Appointments;
