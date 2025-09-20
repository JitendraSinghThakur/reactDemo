import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container flex-grow-1 mt-3">
        <div className="row">
          <div className="col-md-3 mb-3">
            <LeftSidebar />
          </div>
          <div className="col-md-6 mb-3">
            <MainContent />
          </div>
          <div className="col-md-3 mb-3">
            <RightSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
