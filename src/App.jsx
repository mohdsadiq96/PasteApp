import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './component/Navbar';
import Paste from './component/Paste';
import ViewPaste from './component/ViewPaste';
import Home from './component/Home';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
       <Navbar/>
       <Home/>
      </div>
      
    },
    {
      path: "/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path: "/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
);
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={ router}/>
  
    </div>
  )
}

export default App
