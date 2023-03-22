// import { useNavigate } from "react-router-dom";
// import { isLoggedIn } from '../myValue/userSlice';
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
import { useLogOutRedirect } from "../hooks/useLogOutRedirect";



export const DashboardPage = () => {
  useLogOutRedirect();
  
  return (
    <>
    DashboardPage
    </>
)

}