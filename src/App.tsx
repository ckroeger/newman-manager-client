import './App.css'

function App() {
  function handleToogleLayer() {
    const layer = document.getElementById('layer')
    layer?.classList.toggle('hidden')
  }

  return (
    <>
      <div className="bg-zinc-100 min-h-screen flex flex-col justify-center items-center relative">
        <header className="fixed top-0 w-full text-lg text-left px-4 py-2 bg-white shadow-md z-10">
          <button
            id="toggleLayer"
            className="focus:outline-none"
            onClick={handleToogleLayer}>
            🕵️‍♂️ NMC - Newman-Manager-Client
          </button>
        </header>
        <div
          id="layer"
          className="hidden top-full w-full bg-white shadow-md z-100">
          <div className="p-4">
            <div className="rounded-lg bg-zinc-200 p-2 mb-2">Entry 1</div>
            <div className="rounded-lg bg-zinc-200 p-2 mb-2">Entry 2</div>
            <div className="rounded-lg bg-zinc-200 p-2 mb-2">Entry 3</div>
          </div>
        </div>
        <button
          onClick={handleToogleLayer}
          className="text-white px-4 py-2 rounded-lg shadow-md">
          Click me
        </button>
      </div>
    </>
  )
}

export default App
