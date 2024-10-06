import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   BrowserRouter as Router,
//   useLocation,
// } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import "./App.css";
import { Nebulaeinfo } from "../pages/NebulaeInfo";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
      <Routes>
        <Route exact path="../pages/NebulaeInfo" component={Nebulaeinfo} />
       </Routes>
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
