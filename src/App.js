import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import TvNow from "./pages/TvNow";
import Movies from "./pages/Movies";
import Celebrity from "./pages/Celebrity";
import More from "./pages/More";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tv" element={<TvNow/>}></Route>
          <Route path="/tv/:name" element={<TvDetail/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/movies/:title" element={<MovieDetail/>}></Route>
          <Route path="/person" element={<Celebrity/>}></Route>
          <Route path="/more" element={<More/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
