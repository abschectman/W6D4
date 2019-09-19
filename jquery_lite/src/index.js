const Node = require("./node.js");
const DOMNodeCollection = require("./dom_node_collection.js");
const queue = [];
// function test(arg){
//   console.log(arg);
// }


function main(arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }else if(typeof arg === "string"){
    let nodeList = document.querySelectorAll(arg);
    let nodeListArray = Array.from(nodeList);
    return new DOMNodeCollection(nodeListArray);
  } else if(arg instanceof Function){
    queue.push(arg);
    //TODO ADD FOR WHEN DOC ALREADY LOADED save in callback
  }
 
};


window.$l = main;


window.$l.ajax = function(options) {
    const xhr = new XMLHttpRequest();
    if(!options.type){
      options.type = "GET";
    }
    if (!options.url) {
      options.url = "window.location.href";
    }
    if (!options.contentType) {
      options.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
    }
    if (!options.error) {
      options.error = ()=>{
        console.log("error");
      }
    }
     if (!options.success) {
       options.success = ()=>{
         console.log("success!")
       };
     }
    xhr.open(options.type, options.url);

    xhr.send();
    xhr.onload = function(){
      if (xhr.status === 200) {
        return options.success();
      } else if (xhr.status > 399 && xhr.status < 500) {
        return options.error();
      }
    }
  }

const callback3 = function() {
  return console.log("hi3");
};

const callback = function() {
  return console.log("hi");
};
window.$l(callback);
window.$l(callback3);

document.addEventListener("DOMContentLoaded", ()=>{queue.forEach(func => {
     func();
   });})
