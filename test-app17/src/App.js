import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MeetingList from "./components/MeetingList";
import MeetingForm from "./components/MeetingForm";
import meetingsData from "./data/meetings.json";
import "./App.css";

function App() {
  const [meetings, setMeetings] = useState(meetingsData);
  const [editingMeeting, setEditingMeeting] = useState(null);

  const addMeeting = (meeting) => {
    setMeetings([
      ...meetings,
      { ...meeting, id: meetings.length > 0 ? Math.max(...meetings.map(m => m.id)) + 1 : 1 }
    ]);
  };

  const editMeeting = (updatedMeeting) => {
    setMeetings(
      meetings.map((meeting) =>
        meeting.id === updatedMeeting.id ? updatedMeeting : meeting
      )
    );
    setEditingMeeting(null);
  };

  const handleEditClick = (meeting) => {
    setEditingMeeting(meeting);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Meetings</h2>
        <MeetingList meetings={meetings} onEdit={handleEditClick} />
        <h2>{editingMeeting ? "Edit Meeting" : "Add Meeting"}</h2>
        <MeetingForm
          key={editingMeeting ? editingMeeting.id : "new"}
          onSubmit={editingMeeting ? editMeeting : addMeeting}
          meeting={editingMeeting}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
