/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";

// Service Routes
import ServiceOne from "pages/Services/ServiceOne";
import ServiceTwo from "pages/Services/ServiceTwo";
import ServiceThree from "pages/Services/ServiceThree";
import ServiceFour from "pages/Services/ServiceFour";
import ServiceFive from "pages/Services/ServiceFive";
import ServiceSix from "pages/Services/ServiceSix";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/Home" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/Home" />} />
        <Route path="/servicio/1" element={<ServiceOne />} />
        <Route path="/servicio/2" element={<ServiceTwo />} />
        <Route path="/servicio/3" element={<ServiceThree />} />
        <Route path="/servicio/4" element={<ServiceFour />} />
        <Route path="/servicio/5" element={<ServiceFive />} />
        <Route path="/servicio/6" element={<ServiceSix />} />
      </Routes>
    </ThemeProvider>
  );
}
