import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >   
          {/* External redirect route */}
        <Route
            path="/barcelona"
           component ={()=>{
            window.location.href = 'https://barcelona.dreamvortex.com';
            return null;
           }}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
