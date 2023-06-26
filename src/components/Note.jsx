import React, { useState, useEffect } from 'react';
import { MdDelete, MdPalette } from 'react-icons/md';
import { RiPushpin2Line, RiPushpin2Fill } from 'react-icons/ri';

export default function Note(props) {
  const [noteColor, setNoteColor] = useState('#FADA5E');
  const [pinned, setPinned] = useState(false);
  const [creationTime, setCreationTime] = useState('');

  useEffect(() => {
    const savedColor = localStorage.getItem(`noteColor-${props.id}`);
    const savedPinned = localStorage.getItem(`notePinned-${props.id}`);
    const savedCreationTime = localStorage.getItem(`noteCreationTime-${props.id}`);

    if (savedColor) {
      setNoteColor(savedColor);
    }

    if (savedPinned) {
      setPinned(savedPinned === 'true');
    }

    if (savedCreationTime) {
      setCreationTime(savedCreationTime);
    } else {
      setCreationTime(new Date().toLocaleString());
    }
  }, [props.id]);

  useEffect(() => {
    localStorage.setItem(`noteColor-${props.id}`, noteColor);
    localStorage.setItem(`notePinned-${props.id}`, pinned.toString());
    localStorage.setItem(`noteCreationTime-${props.id}`, creationTime);
  }, [props.id, noteColor, pinned, creationTime]);

  function handleClick() {
    props.onDelete(props.id);
  }

  function getRandomColor() {
    const colors = [
      '#2ecc71',
      '#3498db',
      '#8e44ad',
      '#e67e22',
      '#f1c40f',
      '#e74c3c',
      '#16a085',
      '#d35400',
      '#c0392b',
      '#1abc9c',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function handleChangeColor() {
    const newColor = getRandomColor();
    setNoteColor(newColor);
  }

  function handleTogglePin() {
    setPinned((prevPinned) => !prevPinned);
  }

  return (
    <div className={`note${pinned ? ' pinned' : ''}`} style={{ backgroundColor: noteColor }}>
      <h1>
        <b>{props.title}</b>
      </h1>
      <p>{props.content}</p>

      <div className="button-container">
        <button onClick={handleClick}>
          <MdDelete size={25} />
        </button>
        <button onClick={handleChangeColor}>
          <MdPalette size={20} />
        </button>
        <button className="pin-button" onClick={handleTogglePin}>
          {pinned ? <RiPushpin2Line /> : <RiPushpin2Fill />}
        </button>
      </div>

      <p className="creation-time">{creationTime}</p>
    </div>
  );
}
