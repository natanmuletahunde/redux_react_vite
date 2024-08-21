/* eslint-disable no-unused-vars */
import './App.css'
// Importing Dashboard.jsx in another file
import Dashboard from './components/Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
         <Route path="/" element = {<RootLayout/>}>
             <Route index element={<Dashboard/>}></Route> 
             <Route path="/Cart" element={<Cart/>}></Route> 
         </Route>
  ))
  return (
   <div className='App'>
   <RouterProvider router={router} />
   </div>
  )
}

export default App
