//handling language button events
console.log("Js installing for button section")
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button");
    btn1.style.outline="2px solid white";
})
let btn2 = document.querySelector("#containerbtn");
btn2.addEventListener("click",()=>{
    console.log("button2");
    btn2.style.outline="2px solid white";
})
let btn3 = document.querySelector("#trendbtn");
btn3.addEventListener("click",()=>{
    console.log("button3");
    btn3.style.outline="2px solid white";
})