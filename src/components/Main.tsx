import Die from "./DieComponent";
import { getDieData } from "../utils/getDieData"
import { useEffect, useState } from "react";
import { DieData } from "../types/dieData.types";
import useStoreId from "../store/storeId";

export default function Main() {
  //initialize useStoreId  
  const storeDieData = useStoreId((state) => state.storeDieData)
  const [dieData, setDieData] = useState<DieData[]>([])
  //load data
  useEffect(() => {
    const data = getDieData()
    setDieData(data)
  }, [])

  // handle the roll button
  const handleRoll = () => {
    console.log(storeDieData)
    const dataArr = getDieData()

    // const newData = dataArr.map((data) => {
    //   if(data.id === storeDieData.id) {
    //     return {...data, storeDieData.value}
    //   } else {
    //     return {...data}
    //   }
    // })

    setDieData(dataArr)
  }

  return (
    <main className="main">
      <div className="main_container"> 
        <section className="main_content">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </section>
        <Die data={dieData}/>
        <button className="dice_btn" onClick={handleRoll}>Roll</button>
      </div>
    </main>
  )
}
