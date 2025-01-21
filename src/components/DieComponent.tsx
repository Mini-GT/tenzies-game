import { DieData } from "../types/dieData.types"

type DieProps = {
  value: number
  selected: boolean
  id: number
  handleSelect: (...args: DieData[]) => void
}

export default function Die({
  value,
  selected,
  id,
  handleSelect
} : DieProps) {
  return (
    <button 
      className={`grid_button ${selected ? "selected" : null}`}
      onClick={() => handleSelect({id, value, selected})}
    >
      {value}
    </button>
  )
}
