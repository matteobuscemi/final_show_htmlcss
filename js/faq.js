"use strict";
var faqButtons = document.querySelectorAll(".items");
faqButtons.forEach(button => {
   
    button.addEventListener("click",function(){
        var showEvent = button.classList[1];
        let childs = [].slice.call(button.parentNode.children);
        childs.forEach(child => {
            if(child.classList[1] != showEvent) {
                child.classList.remove("active");
                button.classList.add("active");
            }
        });
           let siblings = document.querySelectorAll(".results");
        siblings.forEach(sibling => {
            if(sibling.classList[1] != showEvent) {

                sibling.style.display ='none';
            }
            else {
                sibling.style.display ='block';
            }
        });
        
    })
});
