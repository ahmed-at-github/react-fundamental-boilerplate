import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import AuthProvider from "./context/AuthProvider"
import PrivateOutlet from "./components/PrivateOutlet"


function App() {


  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateOutlet />} >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route >
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
