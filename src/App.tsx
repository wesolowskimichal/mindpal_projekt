import Table from '@/components/table'
import jsonData from '@/static/data.json'
import BarChartComponent from './components/barChart/BarChartComponent'
import PieChartComponent from './components/pieChart/PieChartComponent'
import BarChartSvg from '@/assets/bar_chart_icon.svg'
import PieChartSvg from '@/assets/pie_chart_icon.svg'
import { useCallback, useState } from 'react'
import { RoofPanelInfo } from './types/Types'

const data: RoofPanelInfo[] = jsonData

function App() {
  const [chartDisplay, setChartDisplay] = useState<'pie' | 'bar'>('bar')
  const [currentElement, setCurrentElement] = useState<RoofPanelInfo>(jsonData.slice(-1)[0])

  const handleOnRowClick = useCallback(
    (element: RoofPanelInfo) => {
      setCurrentElement(element)
    },
    [setCurrentElement]
  )

  return (
    <div className="flex p-4 gap-2 items-center">
      <div className="flex-1 h-[400px]">
        <div className="flex space-x-2 p-2">
          <button
            onClick={() => setChartDisplay('pie')}
            className={`${
              chartDisplay === 'pie' ? 'bg-background text-text shadow-md shadow-black' : 'bg-gray-100 text-gray-400'
            } rounded-full focus:bg-background focus:text-text focus:shadow-md focus:shadow-black px-4 py-2 flex items-center space-x-2 duration-500 hover:bg-gray-300`}
          >
            <img src={PieChartSvg} alt="" />
            <span>Pie Chart</span>
          </button>
          <button
            onClick={() => setChartDisplay('bar')}
            className={`${
              chartDisplay === 'bar' ? 'bg-background text-text shadow-md shadow-black' : 'bg-gray-100 text-gray-400'
            } rounded-full focus:bg-background focus:text-text focus:shadow-md focus:shadow-black px-4 py-2 flex items-center space-x-2 duration-500 hover:bg-gray-300`}
          >
            <img src={BarChartSvg} alt="" />
            <span>Bar Chart</span>
          </button>
        </div>
        {chartDisplay === 'pie' ? <PieChartComponent data={currentElement} /> : <BarChartComponent data={jsonData} />}
      </div>
      <div></div>
      <Table data={jsonData} onRowClick={handleOnRowClick} exludeData={['id']} customHeaders={{ label: 'week' }} />
    </div>
  )
}

export default App
