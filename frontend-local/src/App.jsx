function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-400">
          React + Vite + Tailwind funcionando!
        </h1>
        <p className="text-xl mb-8">Tailwind v4+ com plugin Vite</p>
        
        <button className="
          px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
          rounded-xl text-lg font-semibold
          hover:scale-105 hover:shadow-2xl
          transition-all duration-300
        ">
          Clique aqui 🚀
        </button>
      </div>
    </div>
  )
}

export default App