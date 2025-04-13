import React, { useState } from "react";

const List = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote("");
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm"> 
        <div className="card-body"> 
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe tu tarea..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
            />
          </div>
          
          <div className="list-group">
            {notes.length === 0 ? (
              <div className="list-group-item text-muted">
                No hay tareas, añadir tareas
              </div>
            ) : (
              notes.map((note) => (
                <div 
                  key={note.id} 
                  className="list-group-item d-flex justify-content-between align-items-center hover-show-delete"
                >
                  {note.text}
                  <button 
                    className="btn btn-sm btn-outline-danger delete-btn"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="card-footer text-muted text-start">
          {notes.length === 1 ? "1 tarea pendiente" : `${notes.length} tareas pendientes`}
        </div>
      </div>
    </div>
  );
};

export default List;