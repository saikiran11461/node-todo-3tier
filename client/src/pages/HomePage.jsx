import React, { useEffect, useState } from "react";
import TodoComponent from "../components/TodoComponent";
import AddTodo from "../components/AddTodo";
import axios, { toFormData } from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const todoFetching = () => {
    axios
      .get("http://localhost:4567/todo")
      .then((res) => {
        console.log(res?.data?.todo);
        setData(res?.data?.todo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    todoFetching();
  }, []);

 

  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:4567/todo/${id}`)
      .then((res) => {
        console.log(res);
        todoFetching();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const AddTodoFunc = (payload) => {
    console.log("payload", payload);
    axios
      .post("http://localhost:4567/todo/add", {title:payload}, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        todoFetching()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AddTodo addTodoFun={AddTodoFunc} />
      {data &&
        data.map((item) => (
          <TodoComponent
            key={item._id}
            id={item._id}
            title={item.title}
            status={item.status}
            date={item.createdAt}
           
            onDelete={deleteHandler}
          />
        ))}
    </>
  );
};

export default HomePage;
