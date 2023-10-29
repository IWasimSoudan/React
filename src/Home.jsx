import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";
import { addUser } from "./UserReducer";
const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8000/REST/peoples", {
          signal: abortController.signal,
        });
        if (users.length === 0) {
          const data = await res.json();
          console.log(data);
          const { data: info } = data;
          info.forEach((element) => {
            const { id, name, email } = element;
            dispatch(addUser({ id, name, email }));
          });
        }
      } catch (error) {}
    };
    fetchUser();
    return () => abortController.abort();
  }, []);

  const handleDelte = (id) => {
    try {
      fetch(`http://localhost:8000/REST/peoples?id=${id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.status === 200) {
          console.log("User deleted successfully");
          dispatch(
            deleteUser({
              id,
            }),
          );
          // Handle any further actions after successful deletion.
        } else {
          console.error("Error deleting user:", response.statusText);
        }
      });
    } catch (error) {
      console.log(error);
    }
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
