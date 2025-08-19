import { Route, Routes } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Home from "@/pages/Home";
// In App.jsx
import InfantDetails from "./pages/InfantDetails"; // ✅ No curly braces
import AddBaby from "@/components/AddBaby"; 

import ScrollToTop from "./components/ScrollToTop";


function App() {
  // const location = useLocation();
  // const hideNavbarAndFooter = location.pathname === "/error";

  return (
    <div>
       {/* {loading && <PageLoader />} */}
      <div
        // className={`${
        //   hideNavbarAndFooter ? "" : "px-[15px] lg:px-[30px] xl:px-[100px]"
        // } flex flex-col `}
      >
        <ScrollToTop />
        {/* <div className="flex-grow pt-[16px] md:pt-[40px]"> */}
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/infantdetails" element={<InfantDetails/>}/>
            <Route path="/addbaby" element={<AddBaby />} />
          </Routes> 
        </div>
      </div>{" "}
    
    </div>
  );
}


export default App
