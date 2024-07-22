import { useState, useEffect, StrictMode } from "react";
import Card from "./components/Card";
import ConnectButton from "./components/ConnectButton"
function App(){
  return(
    <>
      <Card/>
      <ConnectButton/>
    </>
  );
}
export default App