import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Programs from "./components/Programs"
import Schedule from "./components/Schedule"
import Trainers from "./components/Trainers"


function App() {

  return (
    <div className="bg-black p-6">
      <Header />
      <Carousel />
      <div id="trainers">
        <h1 className="md:text-5xl text-3xl font-semibold text-center p-10 text-gray-500">Meet our Trainers:</h1>
        <Trainers />
      </div>
      <div id="programs">
        <h1 className="md:text-5xl text-3xl font-semibold text-center p-10 text-gray-500">Fitness Classes:</h1>
        <Programs />
      </div>
      <div id="schedule">
        <h1 className="md:text-5xl text-3xl font-semibold text-center p-10 text-gray-500">Schedules:</h1>
        <Schedule />
      </div>
    </div>
  )
}

export default App
