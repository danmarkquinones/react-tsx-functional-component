import "./styles.css";
import Sample from "./Sample";
import { UserModel } from "./SampleInterface.model";
import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState<UserModel[]>([
    {
      id: 1,
      firstname: "Dan",
      lastname: "Quin",
      isAllowed: true,
      age: 21,
      gender: "M"
    },
    {
      id: 2,
      firstname: "John",
      lastname: "Doe",
      isAllowed: true,
      age: 19,
      gender: "M"
    }
  ]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Sample users={users} setUsers={setUsers} />
    </div>
  );
}
