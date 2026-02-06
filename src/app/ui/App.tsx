import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Home } from '../../pages/Home';
import { Charts } from '../../pages/Charts';
import { StarrySky } from '../../pages/StarrySky';
import '../../App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="charts" element={<Charts />} />
          <Route path="starry-sky" element={<StarrySky />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
