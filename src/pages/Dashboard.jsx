import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { Resume } from '../components/Resume';

const Dashboard = () => {
  return (
    <div className='md:flex'>
      <Sidebar />
      <main className='flex-1'>

      <Outlet />
      </main>
      <Resume />
    </div>
  );
};

export default Dashboard;
