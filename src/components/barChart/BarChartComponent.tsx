import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { GetKeysFromObject } from '@/helpers/GetKeysFromObject'
import { chartConfig } from '@/constants/ChartConfig'
import { RoofPanelInfo } from '@/types/Types'

type BarChartProps = {
  data: RoofPanelInfo[]
}

const BarChartComponent = ({ data }: BarChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="flex-1">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
        {GetKeysFromObject(data[0], ['id', 'label']).map(key => (
          <Bar key={String(key)} dataKey={String(key)} fill={`var(--color-${String(key)})`} radius={4} />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

export default BarChartComponent
