import React, { useEffect, useState } from "react";
import { ApiServices } from "../Config/api";
const TableData = () => {
  const [todo, setTodo] = useState([{}]);
  const todoAPI = () => {
    ApiServices.getTodo()
      .then((response) => {
        var data = response.data.data.rows;
        console.log(data);

        setTodo(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => todoAPI(), []);
  return (
    <>
    <div className="container">
      <div className="table-responsive-sm">
        <h2>Todo Task Data</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Task Name</th>
              <th scope="col">Comment</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.taskName}</td>
                  <td>{item.comment}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default TableData;
