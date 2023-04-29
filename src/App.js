import './App.css';

import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Item from './pages/Item';
import Site from './pages/Site';
import Unit from './pages/Unit';
import User from './pages/User';
import Vendor from './pages/Vendor';
import Voucher from './pages/Voucher';
import Subitem from './pages/Subitem';
// import Profile from './pages/Profile';

function App() {
  return (
    <>
      <div className='app'>

        <Sidebar />


        <Routes>

          <Route path='/' element={<Dashboard />} />
          <Route path='/item' element={<Item />} />
          <Route path='/site' element={<Site />} />
          <Route path='/unit' element={<Unit />} />
          <Route path='/user' element={<User />} />
          <Route path='/vendor' element={<Vendor />} />
          <Route path='/voucher' element={<Voucher />} />
          {/* <Route path='/subitem' element={<Subitem />} /> */}

        </Routes>

        {/* <Profile /> */}
      </div>



    </>
  );
}

export default App;
