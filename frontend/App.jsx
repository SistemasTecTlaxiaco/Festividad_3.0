import React from "react"
import logo from "./assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

/*
 * Import canister definitions like this:
 */
import * as Festividad_backend from "../.dfx/local/canisters/Festividad_backend"
/*
 * Some examples to get you started
 */
import { Transfer } from "./components/Transfer"
import { Profile } from "./components/Profile"

//import  Festividad  from "./components/Festividad"
import  User  from "./components/FormModalUser"
import  Eventos  from "./components/FormModalEvent"
import  Menu  from "./components/Menu"
import  Home  from "./components/Principal"

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/usuario" element={<User/>} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      
    </BrowserRouter>

      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />

      <p className="examples-title">
        
      </p>
      <div className="examples">
      
      
        

      </div>

    </div>
  )
}

const client = createClient({
  canisters: {
    Festividad_backend
  },
  providers: [
    new InternetIdentity({ providerUrl: "http://127.0.0.1:8000/?canisterId=be2us-64aaa-aaaaa-qaabq-cai" })
  ],
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: true,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
