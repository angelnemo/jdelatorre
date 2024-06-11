import { Activity } from "../types"

/* acciones */
export type ActivityActions = 
    { type:'save-activity', payload: { newActivity: Activity } } |
    { type:'set-activeId', payload: { id: Activity['id'] } } |
    { type:'delete-activity', payload: { id: Activity['id'] } } |
    { type:'restart-app' }


export type ActivityState = { /* es de tipado Activity */
    activities: Activity[],
    activeId: Activity['id']
}


/* chequear si existe algo en el local Storage */
const localStorageActivities = ():Activity[] => {
    const activities =  localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : [] /* si existen retorna array, de lo contrario vacio */
}



/* estado inicial */
export const initialState:ActivityState  = {
    activities : localStorageActivities(),
    activeId: '' /* esto es para la actividad que haya sido seleccionada para edicion o eliminacion */
}




/* reducer */
export const ativityReducer = (
    state : ActivityState = initialState,
    action: ActivityActions 
) => {
    
    if (action.type === 'save-activity')  {
        /* Logica para actualizar el state */
        // console.log(action.payload.newActivity) /* lo que se esta ingresando */


        let updatedActivities: Activity[] = []
        if (state.activeId) { /* si esta editando */
            updatedActivities = state.activities.map ( activity => activity.id === state.activeId ? action.payload.newActivity : activity )
        } else { /* registro nuevo */
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId:''
        }
    }



    if (action.type === 'set-activeId' ) {
        return {
            ...state,
            activeId: action.payload.id
        }
    }


    if (action.type === 'delete-activity') {
        return {
            ...state,
            activities: state.activities.filter (activity => activity.id !== action.payload.id)
        }
    }



    if (action.type === 'restart-app') {
        return {
            activities:[],
            activeId:''
        }
    }


    return state
}