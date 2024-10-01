import React, {useState} from 'react';
import './App.css';
import Todo from './Todo';

export interface TodoObj{
  task?:string;
  completed?:boolean;
}

function App() {
  const [taskList, setTaskList] = useState<TodoObj[]>([]);
  const [task,setTask]=useState("");
  const [completed,setCompleted]=useState(false);
  function taskConstructor(config:TodoObj):{ task: string | undefined; completed: boolean | undefined }{
    return {
      task:config.task,
      completed:config.completed
    };
  }
  function createTask(e:any) {
    e.preventDefault();
    //let test={typ:"katt",age:2}
    let test = taskConstructor({task:task,completed:completed})
    setTaskList(prevState => ([...prevState,test]))
    //console.log(djurList);
    console.log(task,completed, e.target.value);
    console.log(e);
  }

  return (
    <div className="App">
          {taskList.map((object, i) => <Todo todo={object}/>)}

      <form onSubmit={(e)=>createTask(e)}>
        <input name={"typ"} onChange={(event)=>setTask(event.target.value)}/>
        <button>createTodo</button>
      </form>

    </div>
  );
}

export default App;
