import React from 'react';
import Note from './Note';

function NoteList({ notes, onDeleteNote }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={() => onDeleteNote(index)} />
      ))}
    </ul>
  );
}

export default NoteList;
