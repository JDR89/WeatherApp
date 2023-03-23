import { Buscador } from "./components/Buscador";
import "./style.css";
import { useEffect, useState } from "react";
import { fetchClima } from "../src/helper";
import { InfoPrincipal } from "./components/InfoPrincipal";

function App() {

  const [clima, setClima] = useState({})
  const [city, setCity] = useState("cordoba")
  const [isLoading, setIsLoading] = useState(true)
  const [todo, setTodo] = useState([])
 
  const getCity=(inputValue)=>{
    setCity(inputValue)
  }
  
  const onDelete =(ciudad)=>{
    setTodo(todo.filter(e=>e !== ciudad)) 
    }

  const getClima=async()=>{
    try {
      const newClima  = await fetchClima(city)
      setClima(newClima)
      setIsLoading(false)
      
      if(todo.includes(city))return
      if(todo.length > 3)return 
      setTodo([...todo,city])

    } catch (error) {
      
    }
  }
  
  
  useEffect(() => {
    getClima()
  }, [city])
  
  return (
    <>
      
      <div className="container fondo mt-5 shadow-lg  bg-body-tertiary rounded">

        <div className="row ">

         
        <InfoPrincipal clima={clima} isLoading={isLoading}/>

        <Buscador clima={clima} getCity={getCity}  todo={todo} onDelete={onDelete}/>

        </div>

      </div>

    </>
  );
}

export default App;
