type DieProps = {
  value: number
  selected: boolean
  dieId: number
  handleSelect: (id: number, value: number) => void
}

export default function Die({
  value,
  selected,
  dieId,
  handleSelect
} : DieProps) {
  return (
    <button 
      className={`grid_button ${selected ? "selected" : null}`}
      onClick={() => handleSelect(dieId, value)}
    >
      {value}
    </button>
  )
}
