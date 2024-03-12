import React from "react";

function Navbar() {
    return (
        < >
            {/* body */}
            <div className="skin-blue">
                <div className="wrapper">
                    {/* Header */}
                    <div className="main-deader">
                        <a href="" className="logo">
                            <b>Admin</b>
                            LTE
                        </a>
                        {/* Navbar */}
                        <div className="navbar navbar-static-top">
                            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                                <span class="sr-only">Toggle navigation</span>
                            </a>

                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown messages-menu">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-envelope-o"></i>
                                            <span class="label label-success">4</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 4 messages</li>
                                            <li>
                                                {/*  inner menu: contains the actual data  */}
                                                <div>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Navbar;