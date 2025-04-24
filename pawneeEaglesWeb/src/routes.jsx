import { Routes, Route} from 'react-router-dom';
import UpcomingGames from './components/UpcomingGames';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PlayerStats from './pages/PlayerStats';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upcoming-games" element={<UpcomingGames />} />
      <Route path="/player-stats" element={<PlayerStats />} />
      <Route path="*" element={<NotFound />} />  
    </Routes>
  )
}

export default AppRoutes
