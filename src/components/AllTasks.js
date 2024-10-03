import "./AllTasks.css"
import data from "../data";
import { useState } from "react";


const AllTasks = () => {

  const [myTask, setMyTask] = useState(data)
console.log(myTask);

  const tasksHandler = (id) => {
    const filteredTasks = myTask.filter((oneTask) => {
      return oneTask.id !== id
    })

    setMyTask(filteredTasks);
  }

  const allDeleteHandler = () => {
    setMyTask([]);
  }
  return (
    <div>
      {
        myTask.map((oneTask) => {
          const { id, name } = oneTask

          return <div className="one-task" key={id}>
            <h4>{name}</h4>
            <button type="button" className="one-task-del" onClick={() => tasksHandler(id)}>Vymazat</button>
          </div>
        })
      }
      <button type="button" className="main-button" onClick={allDeleteHandler}>Vše vymazat</button>
    </div>
  )
}

export default AllTasks