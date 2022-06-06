// Using selectors inside the element
// Can also do it in the reverse order: By going in the 
// DOM Tree.

// Traversing the DOM: Going up the DOM Tree.
const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".question-btn");

for (let btn of btns) {
    btn.addEventListener("click", function (event) {
        const question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
        for (let ques of questions) {
            let otherQues = event.currentTarget.parentElement.parentElement;
            if (ques !== otherQues) {
                ques.classList.remove("show-text");
            }
        }
    })
}