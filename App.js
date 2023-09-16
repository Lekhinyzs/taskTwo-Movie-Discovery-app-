import MovieList from "./MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
