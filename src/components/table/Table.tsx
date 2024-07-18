type tableProps = {
  data: any[]
}

const Table = ({ data }: tableProps) => {
  return (
    <table>
      <tr>
        {Object.keys(data[0]).map(key => (
          <th>{key}</th>
        ))}
      </tr>
      {data.map(obj => (
        <tr>
          {Object.keys(obj).map(key => (
            <td>{obj[key]}</td>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default Table
