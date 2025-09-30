import { create } from "zustand";


interface toggle{
    isOpen: boolean,
    setClose: () => void,
    setToggle: () => void
}

export const useNavToggle = create<toggle>((set) => ({
    isOpen: false,
    setClose: () => set(() => ({isOpen : false})),
    setToggle: () => set((state) => ({isOpen: !state.isOpen}))
}))