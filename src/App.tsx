import React, { useState } from "react";
import { postLogin } from "./services/login.services";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function App() {
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [token, setToken] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleSubmit = async () => {
    //Validations - basic
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
    }

    if (password.length < 6) {
      setPasswordError("Password needs to be atleast 6 chars");
      return;
    }

    //can use resolve promise approach::
    // const apiToken = postLogin({ email, password }).then((data) =>
    //   setToken(data.token)
    // );

    // the async await approch::
    const apiToken = await postLogin({ email, password });
    setToken(apiToken.token);
  };

  return (
    <div className="App">
      <form>
        <input
          //setting up - username, controlled value and on change - useState
          id="username"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <p style={{ color: "red", fontSize: "10px" }}>{emailError}</p>
        <br></br>
        <input
          //setting up - password, controlled value and on change - useState
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p style={{ color: "red", fontSize: "10px" }}>{passwordError}</p>
        <br></br>
        <button
          // submit button - with onClick Submit -> which prints token to h1 tag
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <br></br>
        <h1>{token}</h1>
      </form>
    </div>
  );
}

export default App;
