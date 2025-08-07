import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import ScrollToTop from "./components/ScrollToTop";


function App() {

 
  return ( 
    <div>
       {/* {loading && <PageLoader />} */}    
        <ScrollToTop />
        <div className="flex-grow pt-[16px] md:pt-[40px]">
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes> 
        </div>
    </div>
  );
}


export default App
