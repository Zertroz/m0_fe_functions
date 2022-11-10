// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

// added a semicolon for consistency. 

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// Fixed indentation to properly format the code block after the function. Added a semicolon to the end of the var line.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// Moved bracket to new line to close the code block. Corrected "function" spelling error.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}`);
}

average(6, 3);
// Fixed formatting for code block, removed . from console.log statement to correct the statement. Added semicolon to line 47. Added call line with arguments so the function has a purpose. 