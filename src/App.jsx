
import { Routes  , Route} from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notfound from './components/pages/Notfound'
import HomePage from './components/pages/HomePage'


function App() {

  return (
     <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
    
  )
}

export default App
