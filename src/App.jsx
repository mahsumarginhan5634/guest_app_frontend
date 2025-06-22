import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import pageRoutes from "./route/pageRoutes.jsx";
import RouterTracker from "./route/RouterTracker"
import ToastCleaner from "./utils/ToastCleaner";
import 'primeicons/primeicons.css';
import {useEffect, useRef, useState} from "react";
import PagesNavigation from "./components/Navbar/PagesNavigation.jsx";
import LeftSidebarContainer from "./components/HomeContainer/LeftSidebarContainer/LeftSidebarContainer.jsx";
import {getUserFromLocalStorage} from "./store/localStorage.js";

function App() {
    const navbarRef = useRef(null);
    const [navbarHeight , setNavbarHeight] = useState(0);
    const user = getUserFromLocalStorage();


    useEffect(() => {
        if(navbarRef.current){
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []);

    return (
          <div className="App">
              <BrowserRouter>
                  <ToastContainer/>
                  <ToastCleaner/>
                  <RouterTracker/>
                  <div
                      className={"flex flex-col"}>
                        <Navbar forwardRef={navbarRef}/>
                        <div className='flex flex-wrap flex-row justify-center md:flex-row h-screen' style={{paddingTop: navbarHeight + 10}}>
                          <Routes>
                              {
                                  Object.values(pageRoutes).map(({path, element}, index) => (
                                      <Route
                                          key={index}
                                          path={path}
                                          element={element}>
                                      </Route>
                                  ))
                              }
                          </Routes>
                      </div>
                  </div>
                  <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
                      <div className="flex justify-around gap-10 py-4">
                          <PagesNavigation/>
                      </div>
                  </div>
              </BrowserRouter>
          </div>
    );
}

export default App;
