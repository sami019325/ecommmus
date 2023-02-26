import logo from './logo.svg';
import './App.css';
import RoutingPage from './Components/RoutingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import LogIn from './Pages/LogIn.js/LogIn';
import Order from './Pages/Order/Order';
import Card from './Components/Product';
import Saved from './Pages/Saved/Saved';
import Nopage from './Pages/HomePage/Component/Nopage';
import DetailedCard from './Pages/DetailedCard/DetailedCard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RoutingPage />, children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <LogIn /> },
        { path: '/order', element: <Order /> },
        { path: '/saved', element: <Saved /> },
        { path: '/order/card/:id', element: <DetailedCard /> },
        { path: '*', element: <Nopage /> },
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
