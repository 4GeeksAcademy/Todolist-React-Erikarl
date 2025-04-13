import React, { useState } from "react";

const List = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="container mt-4">
      <div className="card shadow-sm"> 
        <div className="card-body"> 
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe tu tarea..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && inputText.trim()) {
                  setNotes([...notes, { id: Date.now(), text: inputText }]);
                  setInputText("");
                }
              }}
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
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {note.text}
                  <button 
                    className="btn btn-sm btn-outline-danger"
                    onMouseOver={(e) => e.target.style.opacity = 1}
                    onMouseOut={(e) => e.target.style.opacity = 0}
                    onClick={() => setNotes(notes.filter(n => n.id !== note.id))}
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