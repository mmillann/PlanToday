import React from "react";
import Navbar from "../Navbar/Navbar";
import Slidebar from "../Slidebar/Slidebar";

function ExplorarLayout({ children }) {
    return (
        <div className="d-flex-column justify-content-center">
            <div className="container-fluid position-fixed fixed-top cab">
                <Navbar />
            </div>
            <div className="mt-3">
                <div className="slidebar mt-5">
                    <Slidebar />
                </div>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="infoPerfil d-flex flex-column mt-5 center-container">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExplorarLayout;
