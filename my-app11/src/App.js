import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      name,
      job,
    };

    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network request fail");
        }
        return response.json();
      })
      .then((data) => {
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the name ..."
            />
          </label>
        </div>
        <div>
          <label>
            Job:
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder="Enter the job ..."
            />
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
      {loading && <p>Loading ......</p>}
      {error && <p>Error:{error.message}</p>}
      {response && (
        <div>
          <h3>User Created</h3>
          <p>ID: {response.id}</p>
          <p>Name: {response.name}</p>
          <p>Job: {response.job}</p>
          <p>Created At: {response.createdAt}</p>
        </div>
      )}
    </div>
  );
}

export default App;
