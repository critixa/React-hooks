import React, { useState } from 'react';

function NoteMaker() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim() !== '') {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Simple Note Maker</h1>
      <input
        type="text"
        placeholder="Enter a note"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default NoteMaker;
