import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Nueva tarea"
        className="input input-bordered input-primary w-60 max-w-xs"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ml-2"
      >
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
