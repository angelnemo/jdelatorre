import { categories } from "../data/categories"
import { Activity } from "../types"
import {v4 as uuidv4} from "uuid"
import { ChangeEvent, useState } from "react"



/* estado inicial */
const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    name:'Pesas',
    calories:0
}


const Form = () => {


    const [activity, setActivity] = useState<Activity>(initialState) /*estado inicial para arrancar */

    /* los eventos registrados podrian ser de select o de input text */
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        //console.log('actividad: ', e.target.value)
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        //console.log('es numero? ', isNumberField)
        setActivity({ /* si es input text guarda como texto, si es select guarda como numero */
            ...activity,
            [e.target.id]:isNumberField ? +e.target.value : e.target.value
        })
    }
    

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg" >
        <div className="grid grid-cols-1 gap-3" >
            <label htmlFor="category" className="font-bold" >Categoria:</label>
            <select className="border border-slate-300 rounded-lg w-full bg-white" 
                name="" id="category"
                value={activity.category}
                onChange={ handleChange }
            >
            {
                categories.map( category => (
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

        <div className="grid grid-cols-1 gap-3" >
            <label htmlFor="name" className="font-bold" >Actividad:</label>
            <input type="text" id="name" 
                className="border border-slate-300 p-2 rounded-lg"
                value={activity.name}
            />
        </div>


        <div className="grid grid-cols-1 gap-3" >
            <label htmlFor="calories" className="font-bold" >Calorias:</label>
            <input type="number" id="calories" 
                className="border border-slate-300 p-2 rounded-lg"
                value={activity.calories}
            />
        </div>


        <input
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
            type="submit"
        />

        
    </form>
    




  )
}

export default Form
