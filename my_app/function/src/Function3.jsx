import React, { useState } from "react";

const Function3 = () => {
  const [login, setLogin] = useState(false);
  function condition() {
    if (login) {
      return <h1>you are loged in!!!</h1>;
    } else {
      return <h1>you are loged out!!!</h1>;
    }
  }
  return (
    <div>
      <h1>wellcome to my web page</h1>
      {condition()}
      <button onClick={() => setLogin(!login)}>
        {login ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Function3;
