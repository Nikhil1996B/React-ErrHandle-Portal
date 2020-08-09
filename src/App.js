import React, { useEffect, useState } from "react";
import "./App.css";
import PortalExample from "./Portal";

function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setusers(data);
      });
  }, []);

  const displayUsers = users.map((user) => (
    <div key={user.id} className="card">
      <h5>{user.login}</h5>
    </div>
  ));
  return (
    <div className="App">
      {/* <div className="section">{displayUsers}</div> */}
      <PortalExample />
    </div>
  );
}

export default App;
