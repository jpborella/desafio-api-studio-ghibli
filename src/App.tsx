import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilmDetails from './pages/FilmDetails';
import { FilmProvider } from './providers/FilmProvider';

function App() {
  return (
    <FilmProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films/:id' element={<FilmDetails />} />
        </Routes>
      </Router>
    </FilmProvider>
  );
}

export default App;
