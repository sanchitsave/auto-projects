import React, { useState, useEffect } from "react";
import "./MeetingForm.css";

function MeetingForm({ onSubmit, meeting }) {
  const [title, setTitle] = useState(meeting ? meeting.title : "");
  const [date, setDate] = useState(meeting ? meeting.date : "");
  const [time, setTime] = useState(meeting ? meeting.time : "");

  useEffect(() => {
    if (meeting) {
      setTitle(meeting.title);
      setDate(meeting.date);
      setTime(meeting.time);
    } else {
      setTitle("");
      setDate("");
      setTime("");
    }
  }, [meeting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && time) {
      const newMeeting = meeting
        ? { ...meeting, title, date, time }
        : { title, date, time };
      onSubmit(newMeeting);
      if (!meeting) {
        setTitle("");
        setDate("");
        setTime("");
      }
    }
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button className="submit-btn" type="submit">
        {meeting ? "Save Changes" : "Add Meeting"}
      </button>
    </form>
  );
}

export default MeetingForm;
