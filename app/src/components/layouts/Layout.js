import LogHeader from "../header/LogHeader";
import MainHeader from "../header/MainHeader";
import Logowanie from "../MainContent/Logowanie/Logowanie";
import classes from "./Layout.module.css";
import { useEffect, useState } from "react";


function Layout(props) {
const [token, setToken] = useState(false);
const [user, setUser] = useState(); 

useEffect(()=>{
  console.log(user);
  const value = sessionStorage.getItem('token');
  if(value){
    setToken(true);
  }
},[]);

if(token===false){
  return (
    <div>
      <LogHeader />
      <Logowanie setToken = {setToken} setUser = {setUser}/>
    </div>
  );
}



  return (
    <div className="main">
      <MainHeader setToken={setToken} userData={user} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;