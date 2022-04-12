import LogHeader from "../header/LogHeader";
import MainHeader from "../header/MainHeader";
import Logowanie from "../MainContent/Logowanie/Logowanie";
import classes from "./Layout.module.css"

import { useState } from "react";

function Layout(props) {
const [token,setToken] = useState();  

if(!localStorage.getItem("token")){
  return (
    <div>
      <LogHeader />
      <Logowanie setToken={setToken} />
    </div>
  );
}



  return (
    <div className="main">
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;