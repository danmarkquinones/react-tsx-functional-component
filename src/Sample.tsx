import React, { useState } from "react";
import { UserModel } from "./SampleInterface.model";

const Sample = (props: any) => {
  const { users, setUsers } = props;
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [form, setForm] = useState<UserModel>({
    id: 0,
    firstname: "",
    lastname: "",
    age: 0,
    isAllowed: false,
    gender: "M"
  });

  const handleSubmit = () => {
    if (isEditMode) {
      const updatedUsers = users.map((el: UserModel, i: number) =>
        el.id === form.id ? form : el
      );
      setUsers(updatedUsers);
    } else {
      form.id = users.length + 1;
      setUsers([...users, form]);
    }
  };

  const onAddUser = () => {
    console.log("Add");
    setIsEditMode(false);
    handleSubmit();
  };

  const onEdit = (user: UserModel) => {
    setIsEditMode(true);
    setForm(user);
  };

  const onDelete = (id: number) => {
    const filteredData = users.filter((el: UserModel) => el.id !== id);
    setUsers(filteredData);
  };

  const handleOnChange = (key: string, e: any) => {
    console.log(e.target.value);
    setForm({ ...form, [key]: e.target.value });
  };

  return (
    <div>
      <p>sample works</p>

      <input
        value={form.firstname}
        onChange={(e) => handleOnChange("firstname", e)}
      />
      <input
        value={form.lastname}
        onChange={(e) => handleOnChange("lastname", e)}
      />

      <button onClick={onAddUser}>
        {isEditMode ? "EDIT USER" : "ADD USER"}
      </button>

      {users.map((user: UserModel, i: number) => (
        <div key={i}>
          <p>
            {user.id}. {user.firstname} {user.lastname}
          </p>
          <p>
            {user.age} | {user.gender ?? "N/A"} |{" "}
            {user.isAllowed ? "Allowed" : "Not Allowed"}
          </p>
          <button onClick={() => onDelete(user.id)}>Delete</button>
          <button onClick={() => onEdit(user)}>Edit</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Sample;
