import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl mt-4">
  <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-square btn-sm" onClick={() => onDelete(task.id)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p className='text-2xl'>{task.title}</p>
  </div>
</div>
  );
};

export default Task;
