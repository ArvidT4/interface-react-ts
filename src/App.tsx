import React, {useState} from 'react';
import './App.css';

interface Djur{
  typ?:string;
  age?:number;
}
function App() {
  const [djurList, setDjurList] = useState<Djur[]>([]);
  const [typ,setTyp]=useState("");
  const [age,setAge]=useState(0);
  function createDjur(config:Djur):{ typ: string | undefined; age: number | undefined }{
    return {
      typ:config.typ,
      age:config.age
    };
  }
  function skapaDjur(e:any) {
    e.preventDefault();
    //let test={typ:"katt",age:2}
    let test = createDjur({typ:typ,age:age})
    setDjurList(prevState => ([...prevState,test]))
    //console.log(djurList);
    console.log(typ,age, e.target.value);
    console.log(e);
  }

  return (
    <div className="App">
          {djurList.map((object, i) => <div key={i}>{object.typ}:{object.age}</div>)}

      <form onSubmit={(e)=>skapaDjur(e)}>
        <input name={"typ"} onChange={(event)=>setTyp(event.target.value)}/>
        <input type={"number"} name={"typ"} onChange={(event)=>console.log(event.target)}/>
        <button>Skapa djur</button>
      </form>

    </div>
  );
}

export default App;
