class Router {
  constructor(node, routes){
    this.node = node;
    this.routes = routes;

  }

  start(){
    this.node.addEventListener("hashchange", ()=>{this.render()})
    this.render();
  };

  render(){
    let component = this.activeRoute();
    if (!component){
      this.node.innerHTML = "";
    } else {
      this.node.innerHTML = "";
      let htmlTag= component.render();
      this.node.appendChild(htmlTag);
    }
  }

  activeRoute(){
    let location = window.location.hash.slice(1);
    return this.routes[location];

  }

}

module.exports = Router;