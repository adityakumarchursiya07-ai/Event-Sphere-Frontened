
import { Routes  , Route} from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notfound from './pages/Notfound'
import HomePage from './pages/HomePage'
import EventDetailsPage from './pages/EventDetailsPage'


function App() {

  return (
     <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/event/id" element={<EventDetailsPage/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
    
  )
}

export default App
