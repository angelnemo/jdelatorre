import Form from "./components/Form"
import { useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"


function App() {


  /* entonces tendremos el state y el dispatch (que ayuda a disparar las funciones) 
    se indica aqui, que reducer esta utilizando (activityReducer) talvez habria mas
  */
  const[state, dispatch] = useReducer (activityReducer, initialState)


  return (
    <>
      <header className="bg-lime-600 py-3" >
        <div className="max-w-4xl mx-auto flex justify-between items-center"  >
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
          <button>Reiniciar App</button>
        </div>
      </header>
      

      <section className="bg-lime-500 py-20 px-5" >
        <div className="max-w-4-xl mx-auto" >
          <Form 
            dispatch={dispatch}
            state={state}
          />
        </div>

      </section>


      <section className="p-10 mx-auto  max-w-4xl">
        <ActivityList 
          activities = {state.activities}
          dispatch={dispatch}
        />
      </section>

      
    </>
  )
}

export default App
