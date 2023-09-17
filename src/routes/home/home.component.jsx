import { Outlet } from 'react-router-dom';
import categories from '../../categories.json';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
