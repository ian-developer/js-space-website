
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let questionsObject, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//pokretanje quiza, nakon klika na Start
function startGame() {
  startButton.classList.add('hide')
  questionsObject = questions
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

//Postavlja sljedece pitanje
function setNextQuestion() {
  resetState()
  showQuestion(questionsObject[currentQuestionIndex])
}

//Postavlja pitanje i dodaje tocan odg btn
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('button')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//resetira display
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

//Event provjerava koji je button kliknut
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (questionsObject.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')

  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  
}

//postavlja crvenu ili zelenu boju buttona
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

//brise boju buttona
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//Polje pitanja
const questions = [
  {
    question: 'How many moons of Jupiter do we know of?',
    answers: [
      { text: '46', correct: false },
      { text: '9', correct: false },
      { text: '79', correct: true },
      { text: '4', correct: false }
    ]
  },
  {
    question: 'What is the distance from the Earth to the Sun?',
    answers: [
      { text: '500 000 000 km', correct: false },
      { text: '10 000 km', correct: false },
      { text: '150 000 000 km', correct: true },
      { text: '100 km', correct: false }
    ]
  },
  {
    question: 'What is the color of the sun?',
    answers: [
      { text: 'Orange', correct: false },
      { text: 'White', correct: true },
      { text: 'Red', correct: false },
      { text: 'Blue', correct: false }
    ]
  },
  {
    question: 'How many planets are there in the Solar System?',
    answers: [
      { text: '9', correct: false },
      { text: '7', correct: false },
      { text: '10', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'What is the largest planet in the Solar System?',
    answers: [
      { text: 'Jupiter', correct: true },
      { text: 'Saturn', correct: false },
      { text: 'Uranus', correct: false },
      { text: 'Neptune', correct: false }
    ]
  },
  {
    question: 'What is the smallest planet in the Solar System?',
    answers: [
      { text: 'Earth', correct: false },
      { text: 'Mercury', correct: true },
      { text: 'Mars', correct: false },
      { text: 'Moon', correct: false }
    ]
  }
]