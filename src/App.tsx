import './App.css'
import { useState } from 'react'

function App() {
  const [isLayerVisible, setLayerVisible] = useState(false)

  const handleToggleLayer = function () {
    setLayerVisible(!isLayerVisible)
  }

  return (
    <>
      <div className="bg-zinc-100 min-h-screen flex flex-col justify-center items-center relative">
        <header className="fixed top-0 w-full text-lg text-left px-4 py-2 bg-white shadow-md z-10">
          <button
            id="toggleLayer"
            className="focus:outline-none"
            onClick={handleToggleLayer}>
            🕵️‍♂️ NMC - Newman-Manager-Client
          </button>
        </header>
        <div
          id="layer"
          className={`transition-transform duration-500 ease-in-out transform-gpu ${
            isLayerVisible ? 'translate-y-0' : '-translate-y-full'
          } fixed top-9 w-full bg-white shadow-md z-100`}>
          <div className="p-4">
            <div className="rounded-lg bg-zinc-200 p-2 mb-2">Entry 1</div>
            <div className="rounded-lg bg-zinc-200 p-2 mb-2">Entry 2</div>
            <div className="rounded-lg bg-zinc-200 p-2 mb-2">Entry 3</div>
          </div>
          <div id="ladde" onClick={handleToggleLayer}></div>
        </div>
      </div>
    </>
  )
}

export default App
