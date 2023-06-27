import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

export default function CustomPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    localStorage.clear();
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <>
      <div className='container'>
        <Header />
      </div>
      <div className='fform'>
        <CreateArea onAdd={addNote} />
      </div>
      <div className='notes-container'>
        {notes.map((noteItem, index) => {
          return (
            <div>
              <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
