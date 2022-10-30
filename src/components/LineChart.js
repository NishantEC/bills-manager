import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { useSelector } from 'react-redux'
Chart.register(...registerables)

const LineChart = () => {
  const billsData = useSelector((store) => store.bills.bills)

  const [Dataset, setDataset] = useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  })
  const months = Object.keys(Dataset)

  useEffect(() => {
    billsData.map((bill) => {
      const date = new Date(bill.date)
      const month = months[date.getMonth()]
      const newAmount = Dataset[month] + parseFloat(bill.amount)
      const prevDataset = Dataset
      prevDataset[month] = newAmount

      setDataset(prevDataset)
    })
  })

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Bill',
        data: Dataset,
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
      <Line data={chartData} options={options} className="linechart" />
    </div>
  )
}

export default LineChart
