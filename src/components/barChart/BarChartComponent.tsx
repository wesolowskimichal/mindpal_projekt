import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { GetKeysFromObject } from '@/helpers/GetKeysFromObject'
import { chartConfig } from '@/constants/ChartConfig'

type BarChartProps = {
  data: any[]
}

const BarChartComponent = ({ data }: BarChartProps) => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={value => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
        {GetKeysFromObject(data[0], ['id', 'label']).map(key => (
          <Bar dataKey={String(key)} fill={`var(--color-${String(key)})`} radius={4} />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

export default BarChartComponent
