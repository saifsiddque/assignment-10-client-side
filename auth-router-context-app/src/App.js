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
import Detail from './components/Detail';
import GetPremium from './components/GetPremium';

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
        path:'/getPremium',
        element: <PrivetRout>
          <GetPremium></GetPremium>
        </PrivetRout>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/details/:id',
        element:<Detail></Detail> ,
        loader:({params}) =>{
          return fetch(`http://localhost:5000/product/${params.id}`)
        }
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
