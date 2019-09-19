class DOMNodeCollection {
  constructor(args){
    this.elements = args;
    return this;
  }

  html(string){
    let arr = this.elements;
    if(string){
      arr.forEach(element => {
        element.innerHTML = string;
      });
      // return document.getElementById(string).innerHTML;
    } else {
      return arr[0].innerHTML;
    }
  }

  empty(){
    let arr = this.elements;
    arr.forEach((el) => {
      el.innerHTML = "";
    })
  }

  append(arg){
    let arr = this.elements;
    arr.forEach((el)=>{
      if (arg instanceof DOMNodeCollection){
        arg.elements.forEach((argEl)=>{
          el.innerHTML += argEl.outerHTML; 
        });
      } else if(typeof arg === "string"){
        el.innerHTML += arg;
      } else {
        el.innerHTML += arg.outerHTML;
      }
    })
  }

  addClass(className){
    this.elements.forEach((el)=>{
      el.classList.add(className);
    })
  }

  removeClass(className){
    this.elements.forEach((el)=> {
      el.classList.remove(className);
    })
  }
  attr(name, value){
    if(!value){
      if (!this.elements[0].getAttribute(name)) {
        return undefined;
      }
      return this.elements[0].getAttribute(name);

    }else{
    this.elements.forEach((el)=>{
      el.setAttribute(name, value);
    })}
  }

  children(){
    const children = [];

  
    this.elements.forEach((el)=>{ 
      let arr = Array.from(el.children);
      arr.forEach((child)=>{
        children.push(child);
      })         
    });
    return new DOMNodeCollection(children);
  }

  parent(){
    const parents = [];
    this.elements.forEach(el => {
      let parent = el.parentElement;
      if(!parents.includes(parent)){
      parents.push(parent);
      }
    });
    return new DOMNodeCollection(parents);
  }

  find(argument){
    let found = [];
    this.elements.forEach((el)=>{
      if(el.querySelectorAll(argument)){
        found = found.concat(Array.from(el.querySelectorAll(argument)));
      }
    });
    return found;
  }

  remove(){
    this.elements.forEach((el)=>{
      let parent = el.parentElement;
      parent.removeChild(el);
    });

  }

  on(type, callback){
    this.stored = {};
    this.elements.forEach((el)=>{
      el.addEventListener(type, callback);
      this.stored.el = callback;
    });
  }
  off(type){
    this.elements.forEach(el => {
      const callback = this.stored.el;
      el.removeEventListener(type, callback);
    });
  }
}

module.exports = DOMNodeCollection;