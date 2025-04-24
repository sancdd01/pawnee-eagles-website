import React from 'react'
import Tile from '../components/Tile'

const TilesSection = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-6'>
      <Tile title="Team Roster"/>
      <Tile title="Gallery"/>
      <Tile title="Fun Facts"/>
      <Tile title="Sponsorships"/>
    </div>
  )
}

export default TilesSection
