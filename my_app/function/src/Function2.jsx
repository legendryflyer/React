import React, { useState } from "react";

const Function2 = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <h1>wellcome to my web page</h1>
      {login ? <p>you are loged in!!</p> : <p>you are loged out!!</p>}
      <button onClick={() => setLogin(!login)}>
        {login ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Function2;
