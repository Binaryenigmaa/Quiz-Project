const dataBase = {
  data: [
    {
      question: `let a ={} b ={}
console.log(a==b)
console.log(a===b)`,
      options: {
        a: `true true`,
        b: `true false`,
        c: `false false`,
        d: `false true`,
      },
      correct_answer: "false false",
    },
    {
      question: `Object.assign(target, source) creates which type of copy`,
      options: {
        a: `deep copy`,
        b: `shallow copy`,
        c: `nested copy`,
        d: `Creates a new reference`,
      },
      correct_answer: "shallow copy",
    },
    {
      question: `Is method chaining possible with forEach`,
      options: {
        a: `true`,
        b: `false`,
      },
      correct_answer: "false",
    },
    {
      question: `Is method chaining possible with forEach?`,
      options: {
        a: `true`,
        b: `false`,
      },
      correct_answer: `false`,
    },
    {
      question: `What does CSS stand for?`,
      options: {
        a: "Cascading Style Sheets",
        b: "Colorful Screen Styles",
        c: "Computer Screen Styling",
        d: "none of the above",
      },
      correct_answer: "Cascading Style Sheets",
    },
    {
      question: "What does API stand for?",
      options: {
        a: "Advanced Programming Integration",
        b: "All Purpose Invention",
        c: "Automated Protocol Invocation",
        d: "Application Programming Interface",
      },
      correct_answer: "Application Programming Interface",
    },
    {
      question: "What is the purpose of npm command in Node.js",
      options: {
        a: "To install Node.js",
        b: "To manage dependencies for a project",
        c: " To create new projects",
        d: "To run tests",
      },
      correct_answer: "To manage dependencies for a project",
    },
    {
      question: "What is the purpose of constructors in javascript",
      options: {
        a: "To define global variables",
        b: "To perform mathematical calculations",
        c: "To handle exceptions",
        d: "To create new instances of an object",
      },
      correct_answer: "To create new instances of an object",
    },
    {
      question: "Which HTTP status code indicates a successful response?",
      options: {
        a: "200 OK",
        b: "404 Not Found",
        c: "500 Internal Server Error",
        d: "302 Found",
      },
      correct_answer: "200 OK",
    },
    {
      question:
        "What is the purpose of the localStorage object in web browsers?",
      options: {
        a: "To store session data",
        b: "To store data persistently on the client side",
        c: "To manage cookies",
        d: "To handle AJAX requests",
      },
      correct_answer: "To store data persistently on the client side",
    },
    {
      question:
        "Which sorting algorithm has an average time complexity of O(n log n)?",
      options: {
        a: "Bubble sort",
        b: "Quick sort",
        c: "Merge sort",
        d: "Insertion sort",
      },
      correct_answer: "Merge sort",
    },
  ]
}

export default dataBase; // es6 export
