import Header from './components/header';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-darkBackground"> {/* Ensure no scrollbars */}
      <Header />
      <div className="min-h-[3.7rem] md:min-h-[3.6rem]"></div> {/* Spacer Div */}

      {/* Sidebar and Content Container */}
      <div className="flex flex-1">
        <Sidebar /> {/* Sidebar */}
        <div className="flex-grow md:ml-64 overflow-auto bg-darkBackground"> {/* Main Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
