import Table from '@/components/table'
import jsonData from '@/static/data.json'
import BarChartComponent from './components/barChart/BarChartComponent'
import PieChartComponent from './components/pieChart/PieChartComponent'

function App() {
  
  return (
    <div className="flex">
      <PieChartComponent data={jsonData[0]} />
      <BarChartComponent data={jsonData} />
      <Table data={jsonData} />
    </div>
  )
}

export default App
