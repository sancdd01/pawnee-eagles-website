import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


const games = [
  {date: "2024-04-10", opponent: "Springfield Wildcats", location: "Pawnee Park", time: "5:00 PM"},
  {date: "2024-04-17", opponent: "Eagleton Hawks", location: "Pawnee Park", time: "6:30 PM"},
  {date: "2024-04-24", opponent: "Pawnee Cubs", location: "Pawnee Park", time: "7:00 PM"},
]

const UpcomingGames = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleGameClick = (gameDate) => {
    setSelectedDate(new Date(gameDate))
  }

  return (
    <div className='grid grid-cols-5 gap-6 p-6 min-h-screen flex items-center justify-center'>
      <div className="col-span-2 bg-white shadow-md p-4 rounded-lg h-full flex flex-col overflow-y-auto">
        <h2 className='text-xl font-bold mb-4 text-center'>Season Schedule</h2>
        <ul className='space-y-3 flex-grow overflow-y-auto'>
          {games.map((game, index) => (
            <li 
              key={index} 
              className={`p-3 rounded-lg cursor-pointer text-white 
                ${selectedDate?.toDateString() === new Date(game.date).toDateString() 
                ? "bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
                }`}
              onClick={() => handleGameClick(game.date)}
              >
               <span className='font-bold'>{game.date}</span> - {game.opponent} @ {game.time}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="col-span-3 bg-white shadow-md p-6 rounded-lg h-full flex flex-col items-center justify-center">
        <h2 className='text-x1 font-bold mb-4'>Game Calendar</h2>
        <div className="w-full max-w-lg flex  flex-col items-center justify-center">
          <Calendar 
            onChange={setSelectedDate}
            value={selectedDate}
            titleClassName={({date}) => 
              games.some((game) => new Date(game.date).toDateString() === date.toDateString())
              ? "highlight-game"
              : null
              }
          />
        </div>
      </div>
    </div>
  )
}

export default UpcomingGames
