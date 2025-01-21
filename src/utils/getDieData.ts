import { DieData } from "../types/dieData.types";

// get die data
export const getDieData = (): DieData[] => {
  const DieData = []
  for (let i = 0; i < 10; i++) {
    DieData.push(
      {
        id: i,
        value: Math.floor(Math.random() * 10) + 1, 
        selected: false
      }
    )
  }
  return DieData
};


