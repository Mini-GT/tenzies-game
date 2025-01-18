import { create } from "zustand";

interface storeStateId {
  storeDieData: {id: number; value: number},
  storeId: (selectedId: number, selectedValue: number) => void
}

const useStoreId = create<storeStateId>()((set) => ({
  storeDieData: {id: 0, value: 0},
  storeId: (selectedId: number, selectedValue: number) => 
    set((state) => ({
      storeDieData: {...state.storeDieData, id: selectedId, value: selectedValue}
    }))
}))

export default useStoreId