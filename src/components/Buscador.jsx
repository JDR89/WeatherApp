import { useState } from "react";

export const Buscador = ({clima,getCity,todo,onDelete}) => {

const [inputValue, setInputValue] = useState("")

  
  const onInputValue=({target})=>{
    setInputValue(target.value)
  }

  const onSubmit=(e)=>{
    e.preventDefault()

    getCity(inputValue.trim().toLowerCase())
    setInputValue("")

    if(inputValue.length === 0)return
    
  }

  const onSelection=(ciudad)=>{
    getCity(ciudad)
  }



  return (
    <>
      <div className="col-4 fondo-traslucido">

        <div className="offset-4">

          <form onSubmit={onSubmit} className="mt-5 pe-4 input-group end-0 ">

            <input className="form-control input" 
            type="text"
            value={inputValue}
            onChange={onInputValue}
            />

            <span className="input-group-text">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
             
              
            </span>

          </form>

        </div>

        <div className="p-5 colorTextoDos">
          <h5 className="mt-3">Your saved locations</h5>
          <hr />

          <div className="mt-4 mb-4 d-flex flex-column ">
            {
              todo.map(city=>(
                <div key={city}>
                  <span onClick={()=>onSelection(city)}  className="mb-2 spanHover">
                    {city} 
                  </span>
                  <button onClick={()=>onDelete(city)} className="btnEliminar">x</button>
                </div>
              ))
            }


          </div>

          <hr />

          <h5 className="mt-4 mb-4">Weather Detail</h5>

          <div className="mb-2 d-flex justify-content-between">
            <span>{clima.descripcion}</span>
            
          </div>

          <div className="mb-2 d-flex justify-content-between">
            <span>Wind</span>
            <span>{clima.viento} kh</span>
          </div>

          <div className="mb-2 d-flex justify-content-between">
            <span>Feels like</span>
            <span>{Math.trunc(clima.feel)} °C</span>
          </div>

          <hr className="mt-5" />
        </div>
      </div>
    </>
  );
};
