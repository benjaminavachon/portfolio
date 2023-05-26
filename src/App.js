import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Home from './Pages/Home'

//import components


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes className="pages">
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
