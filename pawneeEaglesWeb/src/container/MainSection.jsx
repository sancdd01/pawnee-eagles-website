
import React from 'react';
import MenuItem from '../components/MenuItem';


const MainSection = () => {
  return (
      <div className='space-y-4'>
        <MenuItem title='Upcoming Games' variant="button" link="/upcoming-games"/>
        <MenuItem title='Player Stats' variant="button" link="/player-stats"/>
        <MenuItem title='Team Photos' variant="button"/>
        <MenuItem title='News & Updates' variant="button"/>
      </div>
 
  )
}

export default MainSection
