import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';

import ExternalRedirect from "./components/ExternalRedirect";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >   
          {/* External redirect route */}
        <Route
            path="/barcelona"
            element={<ExternalRedirect to="https://barcelona.dreamvortex.com"/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
