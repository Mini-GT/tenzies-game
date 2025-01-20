import Die from "./DieComponent";
import { getDieData } from "../utils/getDieData"
import { useEffect, useState } from "react";
import { DieData } from "../types/dieData.types";
import useStoreId from "../store/storeId";

export default function Main() {
  //initialize useStoreId  
  const {storeDieData} = useStoreId()
  const [dieData, setDieData] = useState<DieData[]>([])

  //load data
  useEffect(() => {
    const data = getDieData()
    setDieData(data)
  }, [])

  // handle the roll button
  const handleRoll = () => {
    const rolledDieData = getDieData()
    const newData = rolledDieData.map((rolledDie) => {

      const matchingId = storeDieData.find(dieData => rolledDie.id === dieData.id)
      return matchingId ? matchingId : rolledDie
    })

    // setDieData(data)
    setDieData(newData)
  }

  // handle the selected class
  const handleSelected = (id: number, value: number) => {
    setDieData(prevDieData => {
      return prevDieData.map(dieData => 
        dieData.id === id ? {...dieData, selected: !dieData.selected} : dieData)
    })

    console.log(value)
  };

  // map each data and render its values
  const gridItem = dieData.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        selected={die.selected}
        dieId={die.id}
        handleSelect={handleSelected}
      />
      // <div 
      //   className={`grid_item ${die.selected ? "selected" : null}`}
        
      // </div>
    )
  })

  return (
    <main className="main">
      <div className="main_container"> 
        <section className="main_content">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </section>
        <div className="grid_container">
          {gridItem}
        </div>
        <button className="dice_btn" onClick={handleRoll}>Roll</button>
      </div>
    </main>
  )
}
