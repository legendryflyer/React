import React, { useState } from "react";

export default function CounterObj() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <form>
        <label>firstName: </label>
        <input
          type="text"
          placeholder="enter first name"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <label>lastname: </label>
        <input
          type="text"
          placeholder="enter last name"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <h1>first name is {name.firstName}</h1>
        <h1>lastname is {name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </>
  );
}
