import AppRoutes from './routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
     <main >
      <AppRoutes />
     </main>
     
    </BrowserRouter>
  )
}

export default App
