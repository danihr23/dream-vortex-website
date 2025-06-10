import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ExternalRedirect from "./components/ExternalRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Wildcard to catch all /barcelona/* routes */}
        <Route path="/barcelona/*" element={<ExternalRedirect baseUrl="https://barcelona.dreamvortex.com" />} />

        {/* Optional: fallback for other unknown routes */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
