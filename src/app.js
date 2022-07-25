const express = require('express');
const {getAll, getById} = require('./tasks/tasks.http')


const app = express();

app.use(express.json());


app.get('/tasks', (req, res) => {
  res.status(200).json(taskDB);
});

app.get('tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const filteredDB = taskDB.filter(item => item.id === id);
  if(filteredDB.length > 0){
    res.status(200).json(filteredDB[0])
  }else{
    res.status(400).json({message: "invalid ID"})
  }
});


app.post('/tasks', (req, res) => {
  const data = req.body;

  if(taskDB.length === 0){
    const newTask = {
      id:1,
      ...data
    }
    taskDB.push(newTask);
  }else{
    const newTask = {
      id: taskDB[taskDB.length -1].id +1,
      ...data
    }
    taskDB.push(newTask);
  }
  res.status(201).json(taskDB);
});

app.delete('/tasks/:id', (req, res) =>{
  const id = Number(req.params.id)
  const index = taskDB.findIndex(item => item.id === id)
  taskDB.splice(index, 1)
  res.status(204).json()
});


app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const data = req.body
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
  res.status(200).json(taskDB)
} else {
  res.status(400).json({message: 'Missing data'})
}
})






app.listen(4000, () => {
  console.log('Server started in port 4000')
});