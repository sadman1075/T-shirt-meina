
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
   
      element:<Main></Main>,
   children:[
    {
      path:'/',
      loader:  () =>fetch("tshirt.json"),
      element:<Home></Home>
    },
    {
      path:'orders',
      element:<Orders></Orders>
    },
    {
      path:'about',
      element:<About></About>
    }
   ]
    }
  ])
  return (
    <div className="App">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
