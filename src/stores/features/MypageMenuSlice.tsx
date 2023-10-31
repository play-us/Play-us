import { createSlice,PayloadAction  } from "@reduxjs/toolkit";


interface menuState{
    MState: string
}

const initialState:menuState = {
    MState: '예약'
}

export const MenuSlice = createSlice(
    {
        name: 'menu',
        initialState,
        reducers: {
            menuChange:(state,action:PayloadAction<{changeMState:string}>)=>{
                state.MState = action.payload.changeMState;
            }
        }
    }
)

export let{menuChange} = MenuSlice.actions;