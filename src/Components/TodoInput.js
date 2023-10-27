
import React, { useState } from 'react';

const TodoInput = ({ handleAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      handleAddTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <form className='flex flex-col items-center sm:flex-row' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add a new Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='px-4 my-4 sm:my-0 sm:mx-2 sm:w-72 h-14 font-semibold border-2 border-red-500 rounded-lg'
        ></input>
        <button type='submit' className='mb-4 p-3 mt-4 sm:pt-2 bg-red-500 text-white font-semibold rounded-lg'>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
