// Function to show/hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to toggle between Login and Registration forms
function toggleAuth(authType) {
    document.getElementById('login').classList.toggle('hidden', authType !== 'login');
    document.getElementById('register').classList.toggle('hidden', authType !== 'register');
}

// Function to add questions dynamically in the "Create Quiz" section
function addQuestion() {
    const container = document.getElementById('questionsContainer');
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
        <input type="text" placeholder="Question" required>
        <input type="text" placeholder="Option 1" required>
        <input type="text" placeholder="Option 2" required>
        <input type="text" placeholder="Option 3">
        <input type="text" placeholder="Option 4">
        <select required>
            <option value="" disabled selected>Select Correct Answer</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
        </select>
    `;
    container.appendChild(questionDiv);
}

// Function to submit and evaluate the Sample Quiz
function submitSampleQuiz() {
    const answers = ['C', 'A', 'B', 'B', 'D', 'B', 'B']; // Correct answers for the sample quiz
    let score = 0;

    // Loop through each question and check the selected answer
    for (let i = 1; i <= 7; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === answers[i - 1]) {
            score++;
        }
    }

    // Display the result
    const quizResult = document.getElementById('quizResult');
    quizResult.innerText = `You scored ${score}/7!`;
    quizResult.classList.remove('hidden');
}

// Function to save the created quiz
function saveQuiz(event) {
    event.preventDefault(); // Prevent form submission

    // Get quiz title and category
    const quizTitle = document.getElementById('quizTitle').value;
    const quizCategory = document.getElementById('quizCategory').value;

    // Get all questions and their details
    const questions = [];
    const questionDivs = document.querySelectorAll('#questionsContainer .question');
    questionDivs.forEach((div, index) => {
        const question = div.querySelector('input[type="text"]').value;
        const options = Array.from(div.querySelectorAll('input[type="text"]')).map(input => input.value);
        const correctAnswer = div.querySelector('select').value;

        questions.push({
            question,
            options,
            correctAnswer,
        });
    });

    // Save quiz data (for now, just log it to the console)
    const quizData = {
        title: quizTitle,
        category: quizCategory,
        questions,
    };
    console.log('Quiz Saved:', quizData);

    // Show a success message (you can replace this with actual saving logic)
    alert('Quiz saved successfully!');
}

// Event listeners
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Login functionality not implemented yet.');
});

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration functionality not implemented yet.');
});

document.getElementById('quizForm').addEventListener('submit', saveQuiz);