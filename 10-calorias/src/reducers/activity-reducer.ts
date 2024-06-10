import { Activity } from "../types"

/* acciones */
export type ActivityActions = 
    { type:'save-activity', payload: { newActivity: Activity } } |
    { type:'set-activeId', payload: { id: Activity['id'] } }


type ActivityState = { /* es de tipado Activity */
    activities: Activity[],
    activeId: Activity['id']
}




/* estado inicial */
export const initialState:ActivityState  = {
    activities : [],
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
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }



    if (action.type === 'set-activeId' ) {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state
}