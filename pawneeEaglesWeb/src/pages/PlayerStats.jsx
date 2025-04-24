import React , { useState } from 'react'
import Papa from "papaparse";

const sampleData = [
  {name: "Leslie Knope", team: "Eagles", avg: 0.325, hr: 10, rbi: 35},
  {name: "Ron Swanson", team: "Eagles", avg: 0.275, hr: 5, rbi: 20},
  {name: "Tom Haverford", team: "Eagles", avg: 0.300, hr: 8, rbi: 30},
]

const PlayerStats = () => {
  const [players, setPlayers] = useState(sampleData)
  const [sortColumn, setSortColumn] = useState(null)
  const [sortOrder, setSortOrder] = useState("asc")
  const [modalVisible, setModalVisible] = useState(false)

const handleSort = (column) => {
    const newOrder = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    const sortedPlayers = [...players].sort((a,b) => {
      if (a[column] < b[column]) return newOrder === "asc" ? -1 : 1
      if (a[column] > b[column]) return newOrder === "asc" ? 1 : -1
      return 0
    })

    setPlayers(sortedPlayers)
    setSortColumn(column)
    setSortOrder(newOrder)
  }

  const handleCSVUpload = (event) => {
    const file = event.target.files[0]
    if(!file) return

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setPlayers(result.data)
        setModalVisible(true)
      }
    })
  }

  return (
    <div className='min-h-screen flex flex-col items-center p-6'>
      <h2 className='text-3xl font-bold mb-4'>Player Stats</h2>
      
      <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700">
        Upload CSV
        <input type="file" accept=".csv" className="hidden" onChange={handleCSVUpload}/>
      </label>

      <div className='w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-blue-600 text-white'>
              <th className='p-3 cursor-pointer' onClick={() => handleSort("name")}>Player</th>
              <th className='p-3 cursor-pointer' onClick={() => handleSort("team")}>Team</th>
              <th className='p-3 cursor-pointer' onClick={() => handleSort("avg")}>Batting</th>
              <th className='p-3 cursor-pointer' onClick={() => handleSort("hr")}>Home</th>
              <th className='p-3 cursor-pointer' onClick={() => handleSort("rbi")}>RBIs</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className={`border-b ${index === 0 ? "bg-yellow-200 font-bold" : "hover:bg-gray-100"}`}>
                <td className='p-3'>{player.name} {index === 0 && "🏆"}</td>
                <td className='p-3'>{player.team}</td>
                <td className='p-3'>{player.avg}</td>
                <td className='p-3'>{player.hr}</td>
                <td className='p-3'>{player.rbi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <h3 className='text-lg font-semibold'>CSV Upload Successful!</h3>
            <button onClick={() => setModalVisible(false)} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700">
              Close
            </button>
          </div>
        </div>
      )}


    </div>
  )
}

export default PlayerStats
