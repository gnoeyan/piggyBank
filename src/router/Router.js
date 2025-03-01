class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  _loadInitialRoute() {
    const path = window.location.pathname;
    this.navigate(path);
  }

  navigate(path) {
    window.history.pushState({}, "", path);
    const route = this.routes[path] || this.routes["/404"];
    document.getElementById("app").innerHTML = route.render();
  }
}

export default Router;
