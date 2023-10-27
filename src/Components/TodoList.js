
const TodoList = ({ tasks, deleteTask }) => {
  const handleDelete = (index) => {
    deleteTask(index);
  };

  return (
    <div className="flex flex-col">
      {tasks.map((task, index) => (
        <div key={index} className='flex flex-col md:flex-row items-center justify-around py-4 bg-red-500 mb-4 '>
          <h3 className='text-xl text-white font-semibold mb-4 md:mb-0 md:mr-4 md:py-0'>{task}</h3>
          <button
            className='p-3 bg-red-900 text-white font-semibold rounded-lg'
            onClick={() => handleDelete(index)}
          >
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
