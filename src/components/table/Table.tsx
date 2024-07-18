import { GetKeysFromObject } from '@/helpers/GetKeysFromObject'

type tableProps = {
  data: any[]
}

const Table = ({ data }: tableProps) => {
  return (
    <table>
      <tr>
        {GetKeysFromObject(data[0]).map(key => (
          <th>{String(key)}</th>
        ))}
      </tr>
      {data.map(obj => (
        <tr>
          {GetKeysFromObject(obj).map(key => (
            <td>{obj[key]}</td>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default Table
