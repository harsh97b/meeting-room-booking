import './App.css';
import React,{useState} from 'react';
import '@progress/kendo-theme-default/dist/all.css';  
import BookingTimeSlot from './components/BookingTimeSlot'

function App() {

  const [meetingRoom, setMeetingRoom] = useState("training");
  const [name, setName] = useState();
  const [desc, setDesc] = useState();

  // console.log("here")

  const meetingRoomHandler = (event) =>{
    var room  = event.target.value
    console.log("room: ",room)
    setMeetingRoom(room)
    // console.log(meetingRoom," ", name," ", desc)
  }
  const nameHandler = (event) =>{
    var n  = event.target.value
    setName(n)
    // console.log(meetingRoom," ", name," ", desc)
    
  }
  const descHandler = (event) =>{
    var d  = event.target.value
    setDesc(d)
    // console.log(meetingRoom," ", name," ", desc)
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
  }
  
  return (
    <div className="App">
        <div className="inputs">
          <h1>Meeting Room Booking</h1>
          <select className="custom-field-select" onChange={meetingRoomHandler}>
            <option selected value="training">Training Room</option>
            <option value="scrum">Scrum Room</option>
            <option value="casual">Casual Room</option>
            <option value="client">Client Room</option>
          </select>
          <label className="custom-field one">
            <input type="text" placeholder=" " value={name} onChange={nameHandler}/>
            <span className="placeholder">Your Name</span>
          </label>
          <label className="custom-field one">
            <input type="text" placeholder=" " onChange={descHandler}/>
            <span className="placeholder" >Meeting Description</span>
          </label>
        <BookingTimeSlot/>
        <button className="btn">Book Appointment</button>
        </div>
      
    </div>
  );
}

export default App;
