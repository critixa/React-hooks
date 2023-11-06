import React, { useState } from 'react';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim() !== '') {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
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
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
