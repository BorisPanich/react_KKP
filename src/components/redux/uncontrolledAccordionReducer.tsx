import React from 'react';

type ActionType = {
    type: string    //action - объект, у кот. есть (обезательно) type
}

export type StateTypeUnCAcc = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "react_KPP/components/UncontrolledAccordion/TOGGLE_COLLAPSED"

// reducer принимает state, action и возвращает новый state
export const reducer = (state: StateTypeUnCAcc, action: ActionType): StateTypeUnCAcc => {
    switch (action.type) {
        case TOGGLE_COLLAPSED: {
            /* для сохранения иммутабельности reducer нужно производить изменения только в копии state
            const copyState = { ...state };
            copyState.collapsed = !state.collapsed
            и возвращаем уже измененную copyState, т.к. reducer не будет перерисовывать state */
            return {
                ...state,
                collapsed: !state.collapsed
            };
        }
        default:
            throw new Error("Bad action type")
    }
    return state;
}