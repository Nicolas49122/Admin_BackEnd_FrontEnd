import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { AutoPage } from './pages/AutoPage';
import { AutoFormPage } from './pages/AutoFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <div className="mt-20">
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auto" element={<AutoPage />} />
          <Route path="/auto-create" element={<AutoFormPage />} />
          <Route path="/auto/:id" element={<AutoFormPage />} />
        </Routes>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
