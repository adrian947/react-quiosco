import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { Resume } from '../components/Resume';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-[1fr,3fr,1fr] p-4'>
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Resume />
    </div>
  );
};

export default Dashboard;
