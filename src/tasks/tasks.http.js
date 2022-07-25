const {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask
} = require('./tasks.controllers');

const getAll =  (req, res) => {
  const data = getAllTasks()
  res.status(200).json({
      items: data.length,
      response: data
  })
};

const getById = (req, res) => {
  const id = Number(req.params.id)

  if(id){
      const data = getUserById(id)
      if(data.id){
          res.status(200).json(data)
      }else {
          res.status(400).json({message: 'Invalid ID'})
      }
  }else {
      res.status(400).json({message: 'Id is not a number'})
  }
}

module.exports = {
  getAll,
  getById
}