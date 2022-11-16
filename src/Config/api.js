import axios from "axios";
import { config } from "./config";
export const ApiServices = {getTodo,addTodo};



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Todo ApiServices++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getTodo() {
  
  let url = `${config.apiUrl}/getAllTodoCards`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}


function addTodo(params) {
  console.log("params", params);
  let url = `${config.apiUrl}/addtodoCard`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}

