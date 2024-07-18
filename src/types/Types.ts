export type RoofPanelInfo = {
  comp: number
  tile: number
  metal: number
  flat: number
  other: number
  id: string
  label: string
}

export type PieChartRoofPanel = {
  type: keyof RoofPanelInfo
  orders: number
  fill: string
}
