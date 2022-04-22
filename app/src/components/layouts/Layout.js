import LogHeader from "../header/LogHeader";
import MainHeader from "../header/MainHeader";
import Logowanie from "../pages/login/Logowanie";
import classes from "./Layout.module.css";
import { useEffect, useState } from "react";


export default function Layout(props) {
const [token, setToken] = useState(false);

useEffect(()=>{
  const value = sessionStorage.getItem('token');
  if(value){
    setToken(true);
  }
},[]);

if(token===false){
  return (
    <div>
      <LogHeader />
      <Logowanie setToken = {setToken} />
    </div>
  );
}



  return (
    <>
      <MainHeader setToken={setToken}/>
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

 