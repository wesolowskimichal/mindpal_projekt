import Table from '@/components/table'
import jsonData from '@/static/data.json'
import BarChartComponent from './components/barChart/BarChartComponent'

function App() {
  return (
    <>
    <BarChartComponent data={jsonData}/>
      <Table data={jsonData} />
    </>
  )
}

export default App
