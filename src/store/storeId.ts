import { create } from "zustand";

interface Die {
  id: number | null
  value: number | null
}

interface storeStateId {
  storeDieData: Die[],
  storeId: (...args: Die[]) => void
}

const useStoreId = create<storeStateId>()((set) => ({
  storeDieData: [],
  storeId: (...args: Die[]) => 
    set((state) => ({
      storeDieData: [...state.storeDieData, ...args] // update storeDieData object arr
    }))
}))

export default useStoreId