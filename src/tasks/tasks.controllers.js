const taskDB = [/* {
  'id': 1,
  "task": "Training",
  "description": "1 hour of exercise",
  "hour": "6 a.m.",
  "priority": "high",
  "state": "started"
} */]

const getAllTasks = () => {
  return taskDB;
}

const getTaskById = (id) => {
  const filteredDB = taskDB.filter((task => task.id === id));
  return filteredDB[0];
};

const createTask = (taskObj) => {
  if(taskDB.length === 0) {
      const newTask = {
          id: 1,
          task: taskObj.task,
          description: taskObj.description,
          hour: taskObj.hour,
          priority: taskObj.priority,
          state: taskObj.state
      }
      taskDB.push(newTask)
      return newTask
  }
  const newTask = {
      id: taskDB[taskDB.length - 1].id + 1,
      task: taskObj.task,
      description: taskObj.description,
      hour: taskObj.hour,
      priority: taskObj.priority,
      state: taskObj.state
  }
  taskDB.push(newTask)
  return newTask
}

  const deleteTask = (id) => {
      const index = taskDB.findIndex(item => item.id === id)
      if(index !== -1) {
          taskDB.slice(index, 1)
      }
      return taskDB
  }

  const updateTask = (data, id) => {
      const index = taskDB.findIndex(item => item.id === id)
      if(data.task && data.description && data.hour && data.priority && data.state){
      taskDB[index] = {
          id, 
          task: data.task,
          description: data.description,
          hour: data.hour,
          priority: data.priority,
          state: data.state
      }
  } 
  return taskDB[index]
}

module.exports = {
  getAllTasks,
  getTaskById, 
  createTask,
  deleteTask,
  updateTask
}
