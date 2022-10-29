import DashBoard from './components/DashBoard'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import CreateBill from './components/CreateBill'
import BillsContainer from './components/BillsContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BillsContainer />} />
        <Route path="createBill" element={<CreateBill />} />
        <Route path="chart" element={<DashBoard/>} />
      </Routes>
    </div>
  )
}

export default App
