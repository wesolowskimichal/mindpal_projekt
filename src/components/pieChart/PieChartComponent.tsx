import { chartConfig } from '@/constants/ChartConfig'
import { GetKeysFromObject } from '@/helpers/GetKeysFromObject'
import { PieChartRoofPanel, RoofPanelInfo } from '@/types/Types'
import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { Label, Pie, PieChart } from 'recharts'

type PieChartComponentProps = {
  data: RoofPanelInfo
}

// type: keyOf data not (id, label)
// orders: number
// fill: from chartConfig

const PieChartComponent = ({ data }: PieChartComponentProps) => {
  const chartData: PieChartRoofPanel[] = useMemo(() => {
    return GetKeysFromObject(data, ['id', 'label']).map(key => ({
      type: key,
      orders: data[key] as number,
      fill: chartConfig[key].color ?? '#000'
    }))
  }, [data])

  const totalOrders = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.orders, 0)
  }, [chartData])

  return (
    <Card className="flex-1 flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Roof Panel Info For Week</CardTitle>
        <CardDescription>{data.label}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="orders" nameKey="type" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalOrders.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Orders
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PieChartComponent
