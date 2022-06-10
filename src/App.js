import React from "react";
import "./App.css";

import { Header, Footer, Soup, Lista } from "./components";

function App() {
  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <Soup />
        <Lista />
      </main>
      <Footer />
    </div>
  );
}

export default App;
