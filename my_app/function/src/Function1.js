import React, { useState } from "react";

const Function1 = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <h1>wellcome to my webpage</h1>
      {login && <p>you aree loged in!!</p>}
      <button onClick={() => setLogin(!login)}>
        {login ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Function1;
