import React from "react";
import Navbar from "./Page/Navbar";
import './style/AdminLTE.min.css'
import './style/all-skins.min.css'
import './style/bootstrap.min.css'
import './style/daterangepicker-bs3.css'
import './style/jquery-jvectormap-1.2.2.css'
import './style/morris.css'
import Dashboard from "./Page/Dashbord";
import Graphic from "./Page/Graphic";


function Pakage() {
    return (
        < >
          <Navbar />
          <Dashboard />
          <Graphic />
        </>
    )
}

export default Pakage;