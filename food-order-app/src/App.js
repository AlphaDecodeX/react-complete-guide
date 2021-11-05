import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
