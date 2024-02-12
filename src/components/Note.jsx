import React from "react";

function Note(entry) {
  return (
    <div className="note">
      <h1>{entry.title}</h1>
      <p>{entry.content}</p>
    </div>
  );
}

export default Note;
