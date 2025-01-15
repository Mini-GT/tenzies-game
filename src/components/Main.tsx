import Die from "./Die";

export default function Main() {
  return (
    <main className="main">
      <div className="main_container"> 
        <section className="main_content">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </section>
        <Die />
        <button className="dice_btn">Roll</button>
      </div>
    </main>
  )
}
