import Table from '@/components/table'
import jsonData from '@/static/data.json'
import BarChartComponent from './components/barChart/BarChartComponent'
import PieChartComponent from './components/pieChart/PieChartComponent'
import BarChartSvg from '@/assets/bar_chart_icon.svg'
import PieChartSvg from '@/assets/pie_chart_icon.svg'
import { useState } from 'react'

function App() {
  const [chartDisplay, setChartDisplay] = useState<'pie' | 'bar'>('bar')

  return (
    <div className="flex p-4 gap-2 items-center">
      <div className="flex-1 h-[400px]">
        <div className="flex space-x-2 p-2">
          <button
            onClick={() => setChartDisplay('pie')}
            className="bg-gray-100 text-gray-400 focus:bg-background focus:text-text focus:shadow-md focus:shadow-black rounded-full px-4 py-2 flex items-center space-x-2 duration-500 hover:bg-gray-300"
          >
            <img src={PieChartSvg} alt="" />
            <span>Pie Chart</span>
          </button>
          <button
            onClick={() => setChartDisplay('bar')}
            className="bg-gray-100 text-gray-400 focus:bg-background focus:text-text focus:shadow-md focus:shadow-black rounded-full px-4 py-2 flex items-center space-x-2 duration-500 hover:bg-gray-300"
          >
            <img src={BarChartSvg} alt="" />
            <span>Bar Chart</span>
          </button>
        </div>
        <div className="h-400px">
          {chartDisplay === 'pie' ? <PieChartComponent data={jsonData[0]} /> : <BarChartComponent data={jsonData} />}
        </div>
      </div>
      <div></div>
      <Table data={jsonData} exludeData={['id']} customHeaders={{ label: 'week' }} />
    </div>
  )
}

export default App
