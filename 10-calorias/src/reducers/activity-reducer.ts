import { Activity } from "../types"

/* acciones */
export type ActivityActions = {
    type:'save-activity',
    payload: {
       newActivity: Activity 
    }
}

type ActivityState = { /* es de tipado Activity */
    activities: Activity[]
}




/* estado inicial */
export const initialState:ActivityState  = {
    activities : []
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

    return state
}