import {Route, Routes} from 'react-router-dom';

import Home from './views/home/Home';
import NewClient from './views/client/NewClient';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<NewClient />} />
    </Routes>
  );
}

export default App;
