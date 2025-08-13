import { Link, Outlet } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <>
      <h1>Home</h1>

      <Link to="/dashboard">Dashboard</Link>



    </>
  )
}
