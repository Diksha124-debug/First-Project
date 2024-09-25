//handling faq section here

console.log("Js installing for faq section")



function collapse(){
    console.log("function is working")
for (let i = 1; i <=6; i++) {
    document.querySelector(".ans"+ i).style.display = "none";
        document.querySelector("#svg"+ i).style.transform = "rotate(0deg)";
    
}
}

let flag1 = false;
let getQues1 = document.querySelector(".quest1");
getQues1.addEventListener("click", () => {

    console.log("1st is working")

    if (flag1 == false) {
        collapse();
        document.querySelector(".ans1").style.display = "contents";
        document.querySelector("#svg1").style.transform = "rotate(45deg)";
        flag1 = true;

    }
    else {
        flag1 = false;
        document.querySelector(".ans1").style.display = "none";
        document.querySelector("#svg1").style.transform = "rotate(0deg)";

    }
})
let flag2 = false;
let getQues2 = document.querySelector(".quest2");
getQues2.addEventListener("click", () => {

    console.log("2nd is working")

    if (flag2 == false) {
        collapse();
        document.querySelector(".ans2").style.display = "contents";
        document.querySelector("#svg2").style.transform = "rotate(45deg)";
        flag2 = true;

    }
    else {
        flag2 = false;
        document.querySelector(".ans2").style.display = "none";
        document.querySelector("#svg2").style.transform = "rotate(0deg)";

    }
})
let flag3 = false;
let getQues3 = document.querySelector(".quest3");
getQues3.addEventListener("click", () => {
    console.log("3rd is working")

    if (flag3 == false) {
        collapse();
        document.querySelector(".ans3").style.display = "contents";
        document.querySelector("#svg3").style.transform = "rotate(45deg)";
        flag3 = true;

    }
    else {
        flag3= false;
        document.querySelector(".ans3").style.display = "none";
        document.querySelector("#svg3").style.transform = "rotate(0deg)";

    }
})


let flag4 = false;
let getQues4 = document.querySelector(".quest4");
getQues4.addEventListener("click", () => {

    console.log("4th is working");

    if(flag4 == false) {
        collapse();
        document.querySelector(".ans4").style.display = "contents";
        document.querySelector("#svg4").style.transform = "rotate(45deg)";
        flag4 = true;

    }
    else {
        flag4 = false;
        document.querySelector(".ans4").style.display = "none";
        document.querySelector("#svg4").style.transform = "rotate(0deg)";

    }
})

let flag5 = false;
let getQues5 = document.querySelector(".quest5");
getQues5.addEventListener("click", () => {

    console.log("5th is working")

    if (flag5 == false) {
        collapse();
        document.querySelector(".ans5").style.display = "contents";
        document.querySelector("#svg5").style.transform = "rotate(45deg)";
        flag5= true;

    }
    else {
        flag5 = false;
        document.querySelector(".ans5").style.display = "none";
        document.querySelector("#svg5").style.transform = "rotate(0deg)";

    }
})

let flag6= false;
let getQues6 = document.querySelector(".quest6");
getQues6.addEventListener("click", () => {

    console.log("6th is working")

    if (flag6 == false) {
        collapse();
        document.querySelector(".ans6").style.display = "contents";
        document.querySelector("#svg6").style.transform = "rotate(45deg)";
        flag6= true;

    }
    else {
        flag6 = false;
        document.querySelector(".ans6").style.display = "none";
        document.querySelector("#svg6").style.transform = "rotate(0deg)";

    }
})