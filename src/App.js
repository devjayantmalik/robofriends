import React from "react";
import Logo from "./components/Logo";
import RoboList from "./components/RoboList";
import Searchbar from "./components/Searchbar";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  return (
    <main className="app">
      <ThemeToggleButton />
      <Logo />
      <Searchbar />
      <RoboList />
    </main>
  );
}

export default App;
