import dataBase from "./database.js";

let score = 0;
let currentQindex = 0;

const scoreBoard = document.querySelector(".navbar");
const optionBtns = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");  // New: Select the previous button
const questionElement = document.querySelector(".question");

// Show the question and options
function showQuestion() {
    const currentQuestion = dataBase.data[currentQindex];
    
    // Display the current question
    questionElement.innerHTML = `Q.${currentQindex + 1} ${currentQuestion.question}`;
    
    // Display options
    optionBtns.forEach((button, index) => {
        const optionKey = String.fromCharCode(97 + index); // 'a', 'b', 'c', 'd'
        button.textContent = currentQuestion.options[optionKey];
        
        // Reset button colors (in case they're from the previous question)
        button.style.backgroundColor = "";
        
        // Remove old event listener to prevent accumulation
        button.onclick = () => checkScore(button, currentQuestion.correct_answer);
    });
    
    // Update the score display
    scoreBoard.innerHTML = `<h2>Score: ${score}</h2>`;
    
    // Disable the previous button if we're on the first question
    prevBtn.disabled = currentQindex === 0;
    
    // Disable the next button if we've reached the last question
    nextBtn.disabled = currentQindex === dataBase.data.length - 1;
}

// Check the user's guess and update the score
function checkScore(button, correctAnswer) {
    if (button.textContent === correctAnswer) {
        button.style.backgroundColor = "green";
        score++;
    } else {
        button.style.backgroundColor = "red";
    }

    // Disable further clicks for the current question after the first selection
    optionBtns.forEach(btn => btn.disabled = true);
}

// Move to the next question
nextBtn.addEventListener("click", () => {
    if (currentQindex < dataBase.data.length - 1) {
        currentQindex++;
        optionBtns.forEach(btn => btn.disabled = false);  // Enable buttons for the new question
        showQuestion();  // Display the next question
    }
});

// Move to the previous question
prevBtn.addEventListener("click", () => {
    if (currentQindex > 0) {
        currentQindex--;
        optionBtns.forEach(btn => btn.disabled = false);  // Enable buttons for the previous question
        showQuestion();  // Display the previous question
    }
});

// Initialize the quiz with the first question
showQuestion();
