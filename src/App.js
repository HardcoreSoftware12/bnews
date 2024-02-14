import { createBrowserRouter,Outlet } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Business from "./Components/API/Business";
import Sports from "./Components/API/Sports";
import Tech from "./Components/API/Tech";
import Entertainment from "./Components/API/Entertainment";
import Science from "./Components/API/Science";



function App() {
  
  return (
    <div className="w-full border p-4">
      <div className="w-fit mx-auto mb-3 flex items-center gap-5">
        <h1 className="text-5xl mx-auto">Bharat News</h1>
      </div>

      {/* navbar */}
      <div className="sticky top-5 z-10">
        <Navbar/>

      </div>

      <Outlet/>

      
      
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      
      {
        path:"/business",
        element:<Business/>
      },
      {
        path:"/sports",
        element:<Sports/>
      },
      {
        path:"/tech",
        element:<Tech/>
      },
      {
        path:"/entertainment",
        element:<Entertainment/>
      },
      {
        path:"/science",
        element:<Science/>
      },



    ]
  }
])

export default App;