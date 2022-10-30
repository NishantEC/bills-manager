
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import CreateBill from './components/CreateBill'
import BillsContainer from './components/BillsContainer'
import LineChart from './components/LineChart'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BillsContainer />} />
        <Route path="createBill" element={<CreateBill />} />
        <Route path="chart" element={<LineChart/>} />
      </Routes>
    </div>
  )
}

export default App
