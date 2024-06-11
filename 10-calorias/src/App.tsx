import Form from "./components/Form"
import CaloryTracker from "./components/CaloryTracker"

import { useReducer, useEffect, useMemo } from "react"
import { ativityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {
  

  const[state, dispatch] = useReducer(ativityReducer, initialState)
  /* dispatch sera la que dispare la accion deseada en el momento preciso */
  // console.log('Actividades: ', state) /* el useReduer ya permite acceder al compendio de datos obtenido */


  /* guardar en localstorage */
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])
  

  /* bandera para poder reiniciar (si existe algo entoces si) */
  const canRestartApp = () => useMemo( () => state.activities.length, [state.activities] )


  return (
    <>
      <header className="bg-lime-600 py-3" >
        <div className="max-w-4xl mx-auto flex justify-between items-center" >
          <h1 className="text-center text-lg font-bold text-white uppercase" >Contador de Calorias</h1>

          <button className="bg-gray-800 hover:bg-gray-900 font-bold uppercase 
            text-white cursor-pointer rounded-lg text-sm disabled-opacity-10"
            disabled = {!canRestartApp()}
            onClick={() => dispatch({
              type: 'restart-app'
            })}
          >
            Reiniciar App
          </button>

        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5" > 
        <div className="max-w-4xl mx-auto" >
          <Form 
            dispatch = {dispatch}
            state = {state}
          />
        </div>
        
      </section>


      <section className="bg-gray-800 py-10">
        <div className="max-2-4xl mx-auto">
          <CaloryTracker 
            activities={state.activities}
          />
        </div>
      </section>



      <section className="p-10 mx-auto max-w-3-4xl" >
        <ActivityList 
          activities = {state.activities} /* asi se pasan solo las actividades */
          dispatch = {dispatch}
        />
      </section>

    </>
  )
}

export default App
