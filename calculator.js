
function calc() {
  var input1 = parseInt(document.querySelector("#num1").value);
  var input2 = parseInt(document.querySelector("#num2").value);
  var mode = document.querySelector(".mode").value;
  var btn = document.querySelector("btn")
  var answer = document.querySelector("#result")
  var answerbox = document.querySelector("answer-box")
  var calculate;

function produceAnswer() {
    answer.innerHTML = calculate
  }
  

  if(mode == "add") {
      calculate = input1 + input2;
      produceAnswer();
  } else if(mode == "subtract") {
      calculate  = input1 - input2;
      produceAnswer();
  } else if(mode == "divide") {
      calculate = input1/input2;
      produceAnswer();
  } else if(mode == "multiply") {
      calculate = input1 * input2;
      produceAnswer();
  } else if(mode == "modulus") {
      calculate = input1%input2;
      produceAnswer();
  } else if (mode == "powerof") {
      calculate = Math.pow(input1, input2);
      produceAnswer();
  } else if (mode == "squareroot") {
      if (input1 <= 0) {
        console.log("warning illegal input")
        answer.innerHTML = "warning illegal input"

      }else{
        calculate = Math.sqrt(input1)
        produceAnswer();
      }
  }
}

btn.addEventListener('click', calc)


