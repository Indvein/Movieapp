import './css/App.css';
import MovieCard from './Components/MovieCard';
import Navbar from './Components/Navbar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails.jsx';

import { Routes, Route } from "react-router-dom";
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieDetails />} /> {/* ✅ New route */}
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
