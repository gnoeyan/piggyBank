// import Router from "./router/Router.js";
// import Home from "./pages/Home.js";
// import About from "./pages/About.js";

// const routes = {
//   "/": Home,
//   "/about": About,
//   "/404": { render: () => "<h1>404 - 페이지를 찾을 수 없습니다.</h1>" },
// };

// const router = new Router(routes);

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.addEventListener("click", (e) => {
//     if (e.target.matches("[data-link]")) {
//       e.preventDefault();
//       router.navigate(e.target.href);
//     }
//   });
// });

import "./styles/main.scss";
import Counter from "./components/Counter.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = Counter.render();
  Counter.afterRender();
});

