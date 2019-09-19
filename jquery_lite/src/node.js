class Node{
  constructor(argument){
    this.NodeList = document.querySelectorAll(argument);
    this.NodeListArray = Array.from(this.NodeList);
  }
}

module.exports = Node;