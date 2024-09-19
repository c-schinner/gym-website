import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Trainers from "./components/Trainers"


function App() {

  return (
    <div className="bg-slate-600">
      <Header />
      <Carousel />
      <div id="trainers">
        <Trainers />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App
