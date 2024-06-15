import { Activity } from "../types"


/* reducer para manejar los estados de la aplicacion de manera global 
    maneja un estado (state) es decir el valor(es) y una accion ejecutada sobre ellos (crud)
    No puede arrancar en null, por lo tanto hay que darle un initial State
*/



/* acciones a manejarse en el reducer */
export type ActivityActions = 
{ type: 'save-activity', payload: { newActivity: Activity } }




/* tipado de Activity */
export type ActivityState = {
    activities: Activity[]
}


/* chequear si hay actividades registradas, en este caso en local storage */
const localStorageActivities = ():Activity[] => {
    const activities = localStorage.getItem('activities') 
    return activities ? JSON.parse(activities) : [] 
} /* si hay retornar actividades, de lo contrario un array en blanco */


/* estado incial */
export const initialState:ActivityState = {
    activities : localStorageActivities()
}


export const activityReducer = (
    state:ActivityState = initialState,
    action: ActivityActions
    
    ) => {








    return state
}