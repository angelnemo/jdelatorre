import { Activity } from "../types"


/* reducer para manejar los estados de la aplicacion de manera global 
    maneja un estado (state) es decir el valor(es) y una accion ejecutada sobre ellos (crud)
    No puede arrancar en null, por lo tanto hay que darle un initial State

    acciones
    state inicial
    reducer
*/



/* ACCIONES A MANEJAR CON EL REDUCER 
    estas acciones requieren un tipo y un payload (la informacion)
*/
export type ActivityActions = 
{ type: 'save-activity', payload: { newActivity: Activity } } |
{ type: 'delete-activity', payload: { id: Activity['id'] } } |
{ type: 'set-activityId', payload: { id: Activity['id'] } } 





/* tipado de state de este reducer */
export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}


/* chequear si hay actividades registradas, en este caso en local storage */
const localStorageActivities = ():Activity[] => {
    const activities = localStorage.getItem('activities') 
    return activities ? JSON.parse(activities) : [] 
} /* si hay retornar actividades, de lo contrario un array en blanco */


/* ESTADO INICIAL */
export const initialState:ActivityState = {
    activities : localStorageActivities(),
    activeId:'' /* para la actividad elegida para edit/add */
}



/* REDUCER: conectara el estado inicial con las acciones */
export const activityReducer = (
    state:ActivityState = initialState,
    action: ActivityActions
    
    ) => {  
        
        if (action.type === 'save-activity') {
            //console.log(action.payload.newActivity) /* comprobar lo que se esta pasando desde el Form */


            let updatedActivities: Activity[] = []
            if (state.activeId) { /* si esta editando, filtrar si esta editando o crear una neuva actividad */
                updatedActivities = state.activities.map ( activity => activity.id === state.activeId ? action.payload.newActivity : activity )
            } else { /* nueva actividad */
                updatedActivities = [
                    ...state.activities,
                    action.payload.newActivity
                ]
            }


            return {
                ...state, /* se respalda el state */
                //activities: [...state.activities, action.payload.newActivity]
                activities: updatedActivities
                /*en la parte de activities, estas son actualizadas con lo que traiga el payload */
            }
        }


        if (action.type === 'delete-activity') {
            return {
                ...state,
                activities: state.activities.filter ( activity => activity.id !== action.payload.id )
            }
            
        }


        if (action.type === 'set-activityId' ) { /* saber que actividad ha elegido*/
        
            return {
                ...state, /* este state se reflejara en el Form */
                activeId: action.payload.id
            }
        }



    return state
    }