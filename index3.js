console.log("Js installing for photo section")
let index = 1;
let rightArrow = document.querySelector(".arrow1");
let leftArrow = document.querySelector(".arrow2");

rightArrow.addEventListener("click", () => {
    console.log("right slidebar");

    // First click (index == 1)
     if (index == 1) {
        console.log("Right Arrow first click, index:", index);

        leftArrow.style.display = "block";
        document.querySelector(".ffth").style.display = "block";
        document.querySelector(".sxth").style.display = "block";
        document.querySelector(".svth").style.display = "block";
        document.querySelector(".eth").style.display = "block";
        document.querySelector(".nth").style.display = "block";

        //to hide the element
        document.querySelector(".fst").style.display = "none";
        document.querySelector(".snd").style.display = "none";    
        document.querySelector(".thd").style.display = "none";
        document.querySelector(".frth").style.display = "none";
        document.querySelector(".recentAdd").style.display = "none";

        // Increment the index
        index++;
    }
    // When index == 2, hide the arrow button
    else if (index == 2) {
        console.log("Right Arrow second  click, index:", index);
        document.querySelector(".arrow2").style.display = "block";
        document.querySelector(".sxth").style.display = "block";
        document.querySelector(".svth").style.display = "block";
        document.querySelector(".eth").style.display = "block";
        document.querySelector(".nth").style.display = "block";
        document.querySelector(".ffth img").style.width = "22px";
        document.querySelector(".ffth img").style.objectFit = "cover";
        document.querySelector(".ffth img").style.objectPosition = "top right";
        document.querySelector(".ffth img").style.borderRadius = "8p;";
        document.querySelector(".overlay5").style.display = "none";
        document.querySelector(".ffth").style.display = "block";
        
         //to hide the element
         document.querySelector(".fst").style.display = "none";
         document.querySelector(".snd").style.display = "none";
         document.querySelector(".thd").style.display = "none";
         document.querySelector(".frth").style.display = "none";
         document.querySelector(".recentAdd").style.display = "none";
 
        rightArrow.style.display = "none";
        index++;
       
    }


});

leftArrow.addEventListener("click",()=>{
    console.log("left slidebar");
    if (index==3){
        console.log("leftArrow Clicked at:", index);
     
        document.querySelector(".snd").style.display = "block";
        document.querySelector(".thd").style.display = "block";
        document.querySelector(".frth").style.display = "block";
        document.querySelector(".ffth img").style.width = "145px";
        document.querySelector(".ffth img").style.objectFit = "cover";
        document.querySelector(".ffth img").style.objectPosition = "center";
        document.querySelector(".ffth img").style.borderRadius = "11px";
        document.querySelector(".overlay5").style.display = "block";
        document.querySelector(".ffth").style.display = "block";

       rightArrow.style.display = "block";
       
         //to hide the element
        
         document.querySelector(".recentAdd").style.display = "none";
         document.querySelector(".fst").style.display = "none";
         document.querySelector(".sxth").style.display = "none";
         document.querySelector(".svth").style.display = "none";
         document.querySelector(".eth").style.display = "none";
         document.querySelector(".nth").style.display = "none";
         index--;
         
    }
    else if(index==2){
        console.log("leftArrow Clicked at:", index);
        document.querySelector(".fst").style.display = "block";
        document.querySelector(".recentAdd").style.display = "none";
        document.querySelector(".snd").style.display = "block";
        document.querySelector(".thd").style.display = "block";
        document.querySelector(".frth").style.display = "block";
        document.querySelector(".ffth").style.display = "block";
     
       
         //to hide the element
         leftArrow.style.display = "none";     
         document.querySelector(".sxth").style.display = "none";
         document.querySelector(".svth").style.display = "none";
         document.querySelector(".eth").style.display = "none";
         document.querySelector(".nth").style.display = "none";
         index--;
    }
})