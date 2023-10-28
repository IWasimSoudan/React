import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";
const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDelte = (id) => {
    dispatch(
      deleteUser({
        id,
      }),
    );
  };

  return (
    <div className="container">
      <h2>Crud App with JSON Server</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={"/update/" + user.id}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelte(user.id)}
                  className="btn btn-sm btn-danger ms2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;