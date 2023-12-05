import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
// import Work from './pages/Work/Work';
// import Error from './components/Error/Error';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/" element={<Work />} /> */}
      {/* <Route path="/*" element={<Error />} /> */}
    </Routes>
  );
}

export default AppRouter;
