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
    
          <Route path='/admin' element={<AdminTemplate />}>
            <Route path='/admin' element={<AdminDash />} />
            <Route path="/admin/categories" element={<CategoriesManager />} />
            <Route path="/admin/accounts" element={<AccountsManager />} />
          </Route>

          <Route>404!</Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;