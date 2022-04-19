import classes from "./Logowanie.module.css";
import { useRef } from "react";
import PropTypes from "prop-types";

function loginUser(data) {
  var xhr = new XMLHttpRequest();

  //Login user
  xhr.open("POST", "http://localhost:8080/api/login");
  xhr.setRequestHeader("Content-Type", "application/json");

  //send the form data
  xhr.send(JSON.stringify(data));

  return xhr;
}

function registerUser(data){

    var xhr = new XMLHttpRequest();

    //open the request
    xhr.open("POST", "http://localhost:8080/api/register");
    xhr.setRequestHeader("Content-Type", "application/json");

    //send the form data
    xhr.send(JSON.stringify(data));

    return xhr;
}



export default function Logowanie({ setToken , setUser }) {
  const loginInputRef = useRef();
  const passwordInputRef = useRef();
  const regLoginInputRef = useRef();
  const regPasswordInputRef = useRef();
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();

  function getUserData(login) {
    var xhr = new XMLHttpRequest();

    //open the request
    xhr.open("GET", "http://localhost:8080/api/user/" + login);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        setUser(JSON.parse(xhr.responseText));
      }
    };
  }

  function loginFormSubmit(event) {
    event.preventDefault();

    const enteredLogin = loginInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      login: enteredLogin,
      password: enteredPassword,
    };

    const xhr = loginUser(loginData);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (JSON.parse(xhr.responseText).status === "Success") {
    
          sessionStorage.setItem("token", JSON.parse(xhr.responseText).token);
          getUserData(enteredLogin);
          setToken(true);
        } else {
          document.getElementById("loginError").style.display = "block";
        }
      }
    };
  }

  function registerFormSubmit(event) {
    event.preventDefault();

    const enteredRegLogin = regLoginInputRef.current.value;
    const enteredRegPassword = regPasswordInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;

    const registerData = {
      login: enteredRegLogin,
      password: enteredRegPassword,
      userName: enteredName,
      userLastName: enteredLastName,
    };

    const xhr = registerUser(registerData);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (JSON.parse(xhr.responseText).status === "Success") {
          toLoginForm();
        } else {
          document.getElementById("registerError").style.display = "block";
        }
      }
    };
  }

  function toRegisterForm() {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("registerDiv").style.display = "inline";
  }

  function toLoginForm() {
    document.getElementById("registerDiv").style.display = "none";
    document.getElementById("loginDiv").style.display = "inline";
  }

  return (
    <div className={classes.main}>
      <div className={classes.loginDiv} id="loginDiv">
        <form id="LoginForm" onSubmit={loginFormSubmit}>
          <br />
          Wprowadź dane logowania
          <br />
          Login:
          <br />
          <input
            className={classes.input}
            name="login"
            type="text"
            ref={loginInputRef}
          />{" "}
          <br />
          Hasło:
          <br />
          <input
            className={classes.input}
            name="password"
            type="password"
            ref={passwordInputRef}
          />
          <br />
          <button className={classes.submit}>Zaloguj się!!!</button>
          <br />
        </form>
        <p className={classes.error} id="loginError">
          Niepoprawne dane logowania!
        </p>
        <br />
        <p onClick={toRegisterForm}>Nie posiadam konta</p>
      </div>

      <div className={classes.registerDiv} id="registerDiv">
        <form id="RegisterForm" onSubmit={registerFormSubmit}>
          <br />
          Wprowadź dane osobowe
          <br />
          Login:
          <br />
          <input
            className={classes.input}
            name="login"
            type="text"
            ref={regLoginInputRef}
          />
          <br />
          Hasło:
          <br />
          <input
            className={classes.input}
            name="password"
            type="password"
            ref={regPasswordInputRef}
          />
          <br />
          Imie:
          <br />
          <input
            className={classes.input}
            name="name"
            type="text"
            ref={nameInputRef}
          />
          <br />
          Nazwisko:
          <br />
          <input
            className={classes.input}
            name="lastName"
            type="text"
            ref={lastNameInputRef}
          />
          <br />
          <button className={classes.submit}>Utwórz konto!!!</button>
          <br />
        </form>
        <p className={classes.error} id="registerError">
          Coś poszło nie tak
        </p>
        <br />
        <p onClick={toLoginForm}>Mam już konto</p>
      </div>
    </div>
  );
}

Logowanie.propTypes = {
  setToken: PropTypes.func.isRequired,
};
