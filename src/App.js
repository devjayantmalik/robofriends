import React from "react";
import Logo from "./components/Logo";
import RoboList from "./components/RoboList";
import Searchbar from "./components/Searchbar";
import ThemeToggleButton from "./components/ThemeToggleButton";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <main className="app">
      <ThemeToggleButton />
      <Logo />
      <Searchbar />

      <ErrorBoundary>
        <RoboList />
      </ErrorBoundary>
    </main>
  );
}

export default App;
