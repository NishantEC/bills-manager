
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateBill from './components/CreateBill'
import BillsContainer from './components/BillsContainer'
import LineChart from './components/LineChart'
import { updateChartData } from '../src/reducers/chartDataSlice'


function App() {
  const bills = useSelector((store) => store.bills.bills);

  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(updateChartData(bills))
    

  }, [bills, dispatch])
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
