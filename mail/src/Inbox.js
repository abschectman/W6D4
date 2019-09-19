const MessageStore = require("./message_store.js");

class Inbox{

  constructor(){

  }
  render(){
    let ul = document.createElement("ul");
    ul.className = "messages";
    let inboxMessages = MessageStore.prototype.getInboxMessages();
    inboxMessages.forEach((message)=>{
       let messageItem = this.renderMessage(message); 
       ul.appendChild(messageItem);
    });
    return ul
  }

  renderMessage(message){
    let li = document.createElement("li");
    li.className = "message";
    let from = document.createElement("span");
    let subject = document.createElement("span");
    let body = document.createElement("span");

    from.innerHTML = message.from
    subject.innerHTML = message.subject
    body.innerHTML = message.body

    li.appendChild(from);
    li.appendChild(subject);
    li.appendChild(body);

    return li;
  }
}

module.exports = Inbox;