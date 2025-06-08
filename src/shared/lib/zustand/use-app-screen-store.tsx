

import {create} from 'zustand'

export const useAppScreenStore = create((set) => ({
    isOpen:false,
    nameApp:null,
    operationByScreen:'windowScreen',
    openApp:(state:{isOpen:boolean,nameApp:string}) => set({isOpen:state.isOpen,nameApp:state.nameApp || null}),
    closeApp:() => set({isOpen:false,nameApp:null,operationByScreen:'windowScreen'}),
    setOperationScreen:(state:string) => set({operationByScreen:state})
}))