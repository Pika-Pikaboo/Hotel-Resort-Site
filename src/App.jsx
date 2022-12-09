import React from "react";
import IntroPage from "./introduction/IntroPage";
import InfoCard from "./card/InfoCard";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Options from "./options/Options";
import Resort from "./resort/Resort";
import Relaxing from "./relaxing/Relaxing";
import Airlines from "./airlines/Airlines";
import Footer from "./credits/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <IntroPage />
      <InfoCard />
      <Options />
      <Resort />
      <Relaxing />
      <Airlines />
      <Footer />
    </React.Fragment>
  );
}

export default App;
