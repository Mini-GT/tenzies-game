import useStoreId from "../store/storeId";
import { DieData } from "../types/dieData.types";

export default function Die({data} : {data: DieData[]}) {
  //initialize zustand storeId
  const storeId = useStoreId((state) => state.storeId)

  // handle the selected class
  const handleSelected = (e: React.MouseEvent<HTMLElement>) => {
    const selectedId = e.currentTarget.dataset.id
    const selectedValue = e.currentTarget.dataset.value
    const clickedElem = e.currentTarget
    
    // add selected color if it has no classname 'selected', else remove classname
    if(clickedElem.classList.contains('selected')) {
      clickedElem.classList.remove('selected')
    } else {
      clickedElem.classList.toggle('selected')
    }

    // store selected ID in zustand
    if(!selectedId || !selectedValue) return "no ID selected"
    storeId(Number(selectedId), Number(selectedValue))
  };

  // map each data and render its values
  const gridItem = data.map((die) => {
    return <div 
      className={`grid_item`} 
      data-id={die.id} 
      data-value={die.value}
      onClick={handleSelected} 
      key={die.id}>{die.value}</div>
  })

  return (
    <div>
      <section>
        <div className="grid_container">
          {gridItem}
        </div>
      </section>
    </div>
    
  )
}
