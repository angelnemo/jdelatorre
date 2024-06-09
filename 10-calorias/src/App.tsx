import Form from "./components/Form"

import { useReducer } from "react"
import { ativityReducer, initialState } from "./reducers/activity-reducer"

function App() {
  

  const[state, dispatch] = useReducer(ativityReducer, initialState)
  /* dispatch sera la que dispare la accion deseada en el momento preciso */


  return (
    <>
      <header className="bg-lime-600 py-3" >
        <div className="max-w-4xl mx-auto flex justify-between" >
          <h1 className="text-center text-lg font-bold text-white uppercase" >Contador de Calorias</h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5" > 
        <div className="max-w-4xl mx-auto" >
          <Form 
            dispatch = {dispatch}
          />
        </div>
        
      </section>

    </>
  )
}

export default App
