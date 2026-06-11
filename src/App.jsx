import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Survey from './pages/Survey.jsx';
import Game from './pages/Game.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-mist text-ink">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
