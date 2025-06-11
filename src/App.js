import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ExternalRedirect from './components/ExternalRedirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Wildcard to catch all /barcelona/* routes */}
        <Route path='/barcelona/*' element={<ExternalRedirect />} />
        {/* Optional: fallback to home component for other unknown routes */}
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
