
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormInputs, deleteFormInput } from "../API/Api";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css"

function Home() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFormInputs());
  }, [dispatch]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) dispatch(deleteFormInput(id));
  };

  return (
    <div className="container">
      <NavLink className="add-page-link" to="/addPage">Add Page</NavLink>
      <div className="item-list header">
        <p>AD</p>
        <p>Soyad</p>
        <p>Yash</p>
        <p>Unvan</p>
        <p></p>
      </div>
      {users &&
        Object.keys(users).map((key) => (
          <div className="item-list" key={key}>
            <p>{users[key].name}</p>
            <p>{users[key].surname}</p>
            <p>{users[key].age}</p>
            <p>{users[key].mesag}</p>
            <button className="edit-btn" onClick={() => navigate(`/editPage/${key}`)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => deleteHandler(key)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Home;
