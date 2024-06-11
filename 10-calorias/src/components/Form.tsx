import { categories } from "../data/categories"
import {v4 as uuidv4} from "uuid"
import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react"
import { Activity } from "../types"
import { ActivityActions, ActivityState } from "../reducers/activity-reducer"


type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}



const initialState: Activity = {
    id: uuidv4(),
    category:1,
    name:'Pesas',
    calories: 0
}


const Form = ({dispatch, state}:FormProps) => {

    /* sera un useState generico, para poder manejar la actividad fisica y tambien la comida */
    const [activity, setActivity] = useState<Activity>(initialState)
    

    useEffect(() => {
      if (state.activeId) {
        console.log('activateId elegido: ', state.activeId)
        const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
        setActivity(selectedActivity)
      }
    }, [state.activeId])
    




    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        /* evaluar si lo ingresado es numero o texto, porque el tipo activity tiene ambos*/
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        // console.log('es numero? ', isNumberField)


        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
        /*
        console.log(e.target.id) // control sobre el que se esta trabajando
        console.log(e.target.value) // valor que tiene el control accionado
        */
    }


    /* validar: is valido si el name no esta vacio y si hay mas de 0 calorias */
    const isValidActivity = () => {
        const{name, calories}  = activity
        return name.trim() !== '' && calories > 0
    }



    const handleSubmit = ( e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch( {
            type:"save-activity",
            payload: {
                newActivity:activity
            }
        } )

        /* reiniciar formulario */
        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }


  return (
    <form action="" className="space-y-5 bg-white shadow p-10 rounded-lg" 
        onSubmit={handleSubmit}
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select className="border border-slate-300 rounded-lg w-full bg-white" 
                name="" id="category" 
                value={activity.category}
                onChange={handleChange}
            >
                {
                    categories.map ( category => (
                        <option 
                            key={category.id}
                            value={category.id}
                            
                        >
                            {category.name}
                        </option>
                    ) )
                }
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input 
                id="name"
                type="text" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                value={activity.name}
                onChange={handleChange}
            />
        </div>


        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias:</label>
            <input 
                id="calories"
                type="number" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias ej 300, 500"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>


        <input 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase 
            text-white cursor-pointer disabled:opacity-10 " 
            type="submit" 
            value= { activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio' }
            disabled={ !isValidActivity() }
        />

    </form>
  )
}

export default Form
