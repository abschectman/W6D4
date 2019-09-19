const Router = require("./router.js");
const Inbox = require("./Inbox.js");
const MessageStore = require("./message_store.js");
document.addEventListener("DOMContentLoaded", callback);

let routes = {};
routes.inbox = new Inbox();

function callback (){
  window.location.hash = "inbox";
  let content = document.querySelector(".content");
  let router = new Router(content, routes);
  router.start();
  
  let navLis = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navLis.forEach((element)=>{
    element.addEventListener("click", locationSetter.bind(null, element));
  });
}

function locationSetter (element){
  let location = element.innerText.toLowerCase();
  window.location.hash = location;
    let content = document.querySelector(".content");
    let router = new Router(content, routes);
    router.start();
}


