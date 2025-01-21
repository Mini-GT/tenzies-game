import Die from "./DieComponent";
import { getDieData } from "../utils/getDieData"
import { useEffect, useState } from "react";
import { DieData } from "../types/dieData.types";

export default function Main() {
  //initialize useStoreId  
  const [selectedDie, setSelectedDie] = useState<DieData[]>([])
  const [ isWon, setIsWon] = useState<boolean>(false)
  const [dieData, setDieData] = useState<DieData[]>([])

  //load data
  useEffect((): void => {
    const data = getDieData()
    setDieData(data)
  }, [])

  // handle the roll button
  const handleRoll = (): void => {
    if(isWon) {
      setSelectedDie([])
      setIsWon(false)
      const data = getDieData()
      setDieData(data)
    }

    const rolledDie = getDieData().map(rolled => {
      const matchedDie = selectedDie.find(selected => selected.id === rolled.id)
      return matchedDie || rolled
    })

    setDieData(rolledDie)
  }

  // handle the selected class
  const handleSelect = (args: DieData): void => {
    //if all dice are same values
    const sameDieNum = dieData.every(die => die.value === args.value)
    if(sameDieNum) {
      setIsWon(!isWon)
      alert("you won")
    }

    setDieData(prevDieData => {
      return prevDieData.map(dieData => 
        dieData.id === args.id ? {...dieData, selected: !dieData.selected} : dieData)
    })
    

    setSelectedDie(prevSelectedDie => {
      // If die is already selected, remove it
      if (prevSelectedDie.some(die => die.id === args.id)) {
          return prevSelectedDie.filter(die => die.id !== args.id);
      }
      // If die is not selected, add it
      return [...prevSelectedDie, {...args, selected: true}];
    });
  };

  // map each data and render its values
  const gridItem = dieData.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        selected={die.selected}
        id={die.id}
        handleSelect={handleSelect}
      />
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
        <button className="dice_btn" onClick={handleRoll}>{isWon ? "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}
