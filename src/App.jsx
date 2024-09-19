import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Trainers from "./components/Trainers"


function App() {

  return (
    <div className="bg-slate-600">
      <Header />
      <Carousel />
      <div id="trainers">
        <h1 className="md:text-5xl text-3xl font-semibold text-center p-10 text-black">Meet our Trainers:</h1>
        <Trainers />
      </div>
      <div>
        <h1 className="md:text-5xl text-3xl font-semibold text-center p-10 text-black">Fitness Classes:</h1>
      </div>
    </div>
  )
}

export default App
