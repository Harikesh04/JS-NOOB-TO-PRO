// !! What is event delegation and event bubling?

// ? its is way to stop event bubbling or capturing

// ! 2.Event bubbling , capturing , stop propagation, immediate propagation & prevent default

// ? Event bubbling:=> when ever we have nested tags with muliple event listner then when ever we click on child then its parent event listner get called by its own 

// ? Event Capturing=> is is same as even bubbling but it's application is just oppostite its from parent to child/

// ? stop propagation => to stop the event bubbling 

// ? immdiate propagation => suppose we have 3 event listners in a tag and we want only two of them run then we will add event.immidiatePropation(); after than other event listner will not called.

var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener('click',(event)=>{
    event.stopPropagation();// ! this will stop event bubbling
    console.log("div clicked") // here even when ever i will click button div will atomatically called.
},true)

button.addEventListener('click',()=>{
    console.log("button clicked")
},true)// ? if we mark here true then its order will we changes {event capturing}