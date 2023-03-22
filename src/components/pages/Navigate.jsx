import {  Outlet } from "react-router-dom";
import { AppBar } from "../AppBar";


export function Navigate() {

  return (
    <>
     <AppBar/>
   
      <Outlet />
    </>
  );

}