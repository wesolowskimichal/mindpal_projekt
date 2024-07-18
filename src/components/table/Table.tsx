import { GetKeysFromObject } from '@/helpers/GetKeysFromObject'
import { RoofPanelInfo } from '@/types/Types'
import { memo } from 'react'

type tableProps = {
  data: RoofPanelInfo[]
  exludeData?: Array<keyof RoofPanelInfo>
  customHeaders?: {
    [key in keyof RoofPanelInfo]?: string
  }
}

const Table = ({ data, exludeData = [], customHeaders = {} }: tableProps) => {
  return (
    <table className="flex-1 border-black border-2">
      <thead>
        <tr className="bg-[#999]">
          {GetKeysFromObject(data[0], exludeData).map((key, index) => (
            <th key={index} className="text-center">
              {customHeaders[key] ? customHeaders[key] : String(key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((obj, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-[#ccc]">
            {GetKeysFromObject(obj, exludeData).map((key, cellIndex) => (
              <td key={cellIndex} className="text-center">
                {obj[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default memo(Table)
