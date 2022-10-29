//using selectors inside the element
// traversing the dom

//METHOD 1 we traverse all ques boxes (articles) and access its children to set event listener in them
//we added event listener in button child of each quesBox(article) 

let quesBoxes = document.querySelectorAll(".question");

quesBoxes.forEach(quesBox => { //for each article i.e quesBox

//added evenet listener to whole button bcz at a time it shows only one (plus or minus) so clicking on either toggle show-text class
    let btn=quesBox.querySelector(".question-btn"); //selecting specific button in that article only instead of searching in document
    btn.addEventListener("click", function (){

        quesBoxes.forEach(function (q){ //loop again over all articles to remove show-text class from other articles
            
            if(q !== quesBox) //if q i.e article is not current article then remove show-text class
                q.classList.remove("show-text");
        });

        quesBox.classList.toggle("show-text"); //toggle show-text class for current article on clicking button
    })
});

//METHOD 2 traversed over all buttons of all articles and added event listeners to them

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) { 

//     btn.addEventListener("click", function (){ 
        
        //now quesBox i.e article is the grandparent so used parent element to get parent 2 times

//         const quesBox=btn.parentElement.parentElement;
//         quesBox.classList.toggle("show-text"); //toggling show-text class on artice
//     })
// });