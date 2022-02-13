import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CategoriesManager from './pages/Admin/CategoriesManager';
import AdminDash from './pages/Admin/AdminDash';
import AccountsManager from './pages/Admin/AccountsManager';
import AdminTemplate from './templates/admin/AdminTemplate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<AdminTemplate />}>
            <Route path='/' element={<AdminDash />} />
            <Route path="/categories" element={<CategoriesManager />} />
            <Route path="/accounts" element={<AccountsManager />} />
          </Route>

          <Route>404!</Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;