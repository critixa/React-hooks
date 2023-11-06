import React from 'react';

function Note({ note, onDelete }) {
  return (
    <li>
      {note}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Note;
