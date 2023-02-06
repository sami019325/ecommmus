import logo from './logo.svg';
import './App.css';
import RoutingPage from './Components/RoutingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import LogIn from './Pages/LogIn.js/LogIn';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RoutingPage />, children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <LogIn /> },
        { path: '*', element: <div>404</div> },
      ]
    },
  ])
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
