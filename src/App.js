
import React, { useState } from 'react';
import Header from './Components/Header';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header />
      <TodoInput handleAddTask={handleAddTask} />
      <TodoList tasks={tasks} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
