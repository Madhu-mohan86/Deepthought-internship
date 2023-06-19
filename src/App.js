import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homes from './hoome';
function App() {
  return (
    <Router>
     <Routes>
     <Route path='/' element={<Homes/>}/>
     </Routes>
    </Router>
  );
}

export default App;
