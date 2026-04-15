import { BrowserRouter, Routes, Route } from 'react-router-dom';



import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

import Home from './pages/Home';
import Footer from './pages/Footer/Footer';
import Navbar from './Components/Navbar';




function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;