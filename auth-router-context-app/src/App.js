import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import PrivetRout from './routes/PrivetRout';
import Orders from './components/Orders';
import Courses from './components/Courses';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/courses',
        element: <Courses></Courses>,
        loader:() =>{
          return fetch('http://localhost:5000/allProducts')
        }
      },
      {
        path:'/orders',
        element: <PrivetRout>
          <Orders></Orders>
        </PrivetRout>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
      
    ]
    
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
