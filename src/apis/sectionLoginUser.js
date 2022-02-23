import axios from "axios";

export const sectionLoginUser = () => {
  // GET request for remote image in node.js
  axios({
    method: "POST",
    contentType: "application/json",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    url: "https://smt.vimsoft.co/mantrad/modelo/login/login.php",
    data: {
      user: "victor",
      pass: "1474",
      accion: "login",
    },
  }).then(function (response) {
    console.log(response);
  });
};
