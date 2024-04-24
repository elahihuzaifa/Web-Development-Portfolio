var sec1 = document.getElementById("sec1j");
let selectedQuiz = "";
let Score = 0;
function join1() {
  Swal.fire({
    title: "Smit!",
    text: "Quiz not Available (only Web and Mobile Hybird App Development Quiz available)",
    icon: "error",
    confirmButtonText: "Cool",
  });
}

var quizTopics = {
  html: {
    quizName: "HTML Quiz",
    totalQuestion: "10",
    totalTime: "20",
    passingScore: "70",
    questions: [
      {
        question: "What does HTML stand for?",
        answers: {
          a: "Hyperlinks and Text Markup Language",
          b: "Home Tool Markup Language",
          c: "Hyper Text Markup Language",
          d: "Hyperlink Text Markup Language",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Which attribute is used to specify a short hint that describes the expected value of an input field?",
        answers: {
          a: "hint",
          b: "value",
          c: "placeholder",
          d: "description",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Which attribute is used to specify the URL of the page the link goes to?",
        answers: {
          a: "url",
          b: "link",
          c: "href",
          d: "src",
        },
        correctAnswer: "c",
      },
      {
        question: "What does the HTML <a> tag represent?",
        answers: {
          a: "Audio",
          b: "Article",
          c: "Anchor",
          d: "Aside",
        },
        correctAnswer: "c",
      },
      {
        question: "Which attribute is used to define inline styles in HTML?",
        answers: {
          a: "class",
          b: "style",
          c: "inline",
          d: "format",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Which attribute is used to provide an image with an alternative text for screen readers?",
        answers: {
          a: "alt",
          b: "src",
          c: "title",
          d: "link",
        },
        correctAnswer: "a",
      },
      {
        question: "What does the <canvas> element do?",
        answers: {
          a: "Defines a container for an external application",
          b: "Defines graphics",
          c: "Defines an image",
          d: "Defines interactive content",
        },
        correctAnswer: "b",
      },
      {
        question: "What is the purpose of the HTML <header> element?",
        answers: {
          a: "To define a paragraph",
          b: "To define introductory content",
          c: "To define a footer",
          d: "To define a top section or header of a document",
        },
        correctAnswer: "d",
      },
      {
        question: "Which character is used to indicate an end tag?",
        answers: {
          a: "(<)",
          b: "(/)",
          c: "()>)",
          d: "(\\)",
        },
        correctAnswer: "b",
      },
      {
        question: "What is the correct HTML for making a text input field?",
        answers: {
          a: "input type='text'",
          b: "textfield",
          c: "textinput type='text'",
          d: "input type='textfield'",
        },
        correctAnswer: "a",
      },
    ],
  },
  javaScript: {
    quizName: "JavaScript Quiz",
    totalQuestion: "10",
    totalTime: "20",
    passingScore: "70",
    questions: [
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
          a: "script",
          b: "javascript",
          c: "js",
          d: "scripting",
        },
        correctAnswer: "a",
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
          a: "alert('Hello World');",
          b: "msgBox('Hello World');",
          c: "msg('Hello World');",
          d: "alertBox('Hello World');",
        },
        correctAnswer: "a",
      },
      {
        question: "How do you create a function in JavaScript?",
        answers: {
          a: "function myFunction()",
          b: "function:myFunction()",
          c: "function = myFunction()",
          d: "function => myFunction()",
        },
        correctAnswer: "a",
      },
      {
        question: "How do you call a function named 'myFunction'?",
        answers: {
          a: "call myFunction()",
          b: "myFunction()",
          c: "call function myFunction()",
          d: "run myFunction()",
        },
        correctAnswer: "b",
      },
      {
        question: "How do you write an IF statement in JavaScript?",
        answers: {
          a: "if i = 5 then",
          b: "if (i == 5)",
          c: "if i == 5 then",
          d: "if i = 5",
        },
        correctAnswer: "b",
      },
      {
        question: "How does a FOR loop start in JavaScript?",
        answers: {
          a: "for (i = 0; i <= 5)",
          b: "for i = 1 to 5",
          c: "for (i = 0; i <= 5; i++)",
          d: "for (i <= 5; i++)",
        },
        correctAnswer: "c",
      },
      {
        question: "What is the correct way to write an array in JavaScript?",
        answers: {
          a: "var colors = ['red', 'green', 'blue']",
          b: "var colors = 'red', 'green', 'blue'",
          c: "var colors = (1:'red', 2:'green', 3:'blue')",
          d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        },
        correctAnswer: "a",
      },
      {
        question: "How do you add a comment in JavaScript?",
        answers: {
          a: "//This is a comment",
          b: "(<!This is a comment>)",
          c: "'This is a comment",
          d: "/*This is a comment*/",
        },
        correctAnswer: "a",
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
          a: "var colors = 'red', 'green', 'blue'",
          b: "var colors = ['red', 'green', 'blue']",
          c: "var colors = (1:'red', 2:'green', 3:'blue')",
          d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        },
        correctAnswer: "b",
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
          a: "onmouseclick",
          b: "onchange",
          c: "onclick",
          d: "onmouseover",
        },
        correctAnswer: "c",
      },
    ],
  },
};

var topics = document.getElementById("topics");
topics.innerHTML = `<option>Select Quiz Topic</option>`;
var main = document.getElementById("main");
var quizDetails = document.getElementById("quizdetails");
var webquiz = document.getElementById("WebQuiz");

function joinQuiz() {
  sec1.style.display = "none";
  quizDetails.style.display = "flex";
  webQuiz.style.visibility = "visible";
  for (var key in quizTopics) {
    topics.innerHTML += `<option value='${key}'>${key.toUpperCase()}</option>`;
    // console.log(key);
    var obj = quizTopics[key];
    // console.log(obj);
  }

  //   main.innerHTML += `<div class="col-md-12 py-4">
  //     <div>
  //       <table class="table table-striped">
  //         <tr>
  //           <th>Quiz Name</th>
  //           <th>${obj.quizName}</th>
  //         </tr>
  //         <tr>
  //           <th>total question</th>
  //           <th>${obj.totalQuestion}</th>
  //         </tr>
  //         <tr>
  //           <th>Total Time</th>
  //           <th>${obj.totalTime}</th>
  //         </tr>
  //         <tr>
  //           <th>Passing Score</th>
  //           <th>${obj.passingScore}</th>
  //         </tr>

  //       </table>
  //     </div>
  //   </div>`;
}

function topicSearch() {
  //   main.style.display = "none";
  //   quizDetails.style.display = "flex";
  var quizQ = quizTopics[topics.value];
  quizDetails.innerHTML = "";
  selectedQuiz = quizTopics[topics.value];
  // console.log(quizTopics[topics.value]);

  quizDetails.innerHTML += `
  <div class="col-md-12 py-4">
  <div>
  <table class="table table-striped">
  <tr>
    <th>Quiz Name</th>
    <th>${selectedQuiz.quizName}</th>
  </tr>
  <tr>
    <th>total question</th>
    <th>${selectedQuiz.totalQuestion}</th>
  </tr>
  <tr>
    <th>Total Time</th>
    <th>${selectedQuiz.totalTime}</th>
  </tr>
  <tr>
    <th>Passing Score</th>
    <th>${selectedQuiz.passingScore}</th>
  </tr>
  
</table>
<button onclick="quizPlay(selectedQuiz)" type="button" class="btn btn-primary btn-lg">Quiz Play</button>

  </div>
</div>

  
  `;
}
var quizFrom = document.getElementById("questionPlay");
function quizPlay(quiz) {
  quizDetails.style.display = "none";

  var html = "";
  // for (var hey in quizTopics) {
  //   for (var hey1 in quizTopics[hey]) {
  //     var quesObj = quizTopics[hey][hey1];
  //     // console.log(quesObj);
  //     for (var i = 0; i < quesObj.questions.length; i++) {
  //       console.log([i]);
  //     }
  //   }
  // }
  quiz.questions.map((q, a) => {
    html += `<p>${q.question.replace(/<[^>]*>/g, "")}</p>`;
    html += "<ul>";
    for (let key in q.answers) {
      if (q.answers.hasOwnProperty(key)) {
        value = q.answers[key];
        correctAnswer = q.correctAnswer;
        html += `<li> <input name="option-${a}" type="radio" value="${value.replace(
          /<[^>]*>/g,
          ""
        )}" onclick="calculateScore(event,a='${correctAnswer}',b='${key}')"> ${value.replace(
          /<[^>]*>/g,
          ""
        )}</input></li>`;
      }
    }
    html += "</ul>";
  });
  html +=
    '<input type="submit" value="Quiz Submit" class="submit btn btn-primary" onclick="submitQuiz(event)"/>';
  // <input class="" type="submit" value="Submit">

  quizFrom.innerHTML = html;
}
var quizData = document.getElementById("quizData");
function submitQuiz(e) {
  // debugger;
  e.preventDefault();
  quizFrom.style.display = "none";
  quizData.style.display = "flex";
}

// function calculateScore(e, correct, selectedID) {
//   var scoring = correct + " ," + selectedID + " ," + " :" + Score;
//   if (selectedID == correct) {
//     Score = Score + 10;
//   } else {
//     Score = Score - 2;
//   }

//   scoring.indexOf(0, ":");

//   quizData.innerHTML = `
// <h1>Your Score: ${scoring}</h1>

// `;
// }

function calculateScore(e, correct, selectedID) {
  let score = 0;
  var scoring = correct + " ," + selectedID + " ," + " :" + Score;
  if (selectedID == correct) {
    Score = Score + 10;
  } else {
    Score = Score - 2;
  }

  // Find the index of ":"
  var index = scoring.indexOf(":");

  // Check if ":" is found
  if (index !== -1) {
    // Extract the part of the string starting from the index
    var scoreString = scoring.substring(index + 1);

    // Update the quizData element with the extracted score
    quizData.innerHTML = `
      <h1>Your Score: ${scoreString.trim()}</h1>
    `;
  } else {
    // If ":" is not found, just display the full scoring

    quizData.innerHTML = `
      <h1>Your Score: ${scoreText}</h1>
    `;
  }
}
