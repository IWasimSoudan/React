import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.user);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleUpdate = (event) => {
    event.preventDefault();
    const info = { name: uname, email: uemail };
    fetch(`http://localhost:8000/REST/peoples?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then(() => {
      console.log("user updated successfully");
      dispatch(
        updateUser({
          id: id,
          name: uname,
          email: uemail,
        }),
      );
      navigate("/");
    });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Edit Users</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="emai">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Edite</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
