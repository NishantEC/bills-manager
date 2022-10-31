import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { useSelector } from 'react-redux'
Chart.register(...registerables)

const LineChart = () => {
  // const billsData = useSelector((store) => store.bills.bills)
  const ChartData = useSelector((store) => store.chartData.chartData)
  
  // const [Dataset, setDataset] = useState({
    //   January: 0,
    //   February: 0,
    //   March: 0,
    //   April: 0,
    //   May: 0,
    //   June: 0,
    //   July: 0,
    //   August: 0,
    //   September: 0,
    //   October: 0,
    //   November: 0,
    //   December: 0,
    // })
    const months = Object.keys(ChartData)
    console.log(ChartData)

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const handleBillData=(bill)=>{
  //   const date = new Date(bill.date)
  //   const month = months[date.getMonth()]
  //   const newAmount = Dataset[month] + parseFloat(bill.amount)
  //   const prevDataset = Dataset
  //   prevDataset[month] = newAmount
  //   console.log(Dataset);
  //   setDataset(prevDataset)
  // }

  // useEffect(() => {
  //   billsData.map((bill) => handleBillData(bill))
  // },[])

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Bill',
        data: ChartData,
        fill: true,
        backgroundColor: '#cccafb',
        borderColor: '#645cff',
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  return (
    <div className="chart">
      <h3>monthly billing cycle chart</h3>
      <Line data={chartData} options={options} className="linechart" redraw={true}/>
    </div>
  )
}

export default LineChart
