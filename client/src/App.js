import React, { useState, useRef, useCallback, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing_page from "./landing_page";

function App() {
  if (!window.ethereum) {
    alert("Please install metamask!!");
    return;
  }
  const ethers = require("ethers");
  //After adding your Hardhat network to your metamask, this code will get providers and signers
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // MetaMask requires requesting permission to connect users accounts
  provider
    .send("eth_requestAccounts", [])
    .then((accounts) => {
      if (accounts.length > 0) console.log(accounts[0]);
    })
    .catch((e) => console.log(e));

  const signer = provider.getSigner();
  return (
    <Routes>
      <Route path="/" element={<Landing_page signer={signer} />}></Route>
    </Routes>
  );
}

export default App;
