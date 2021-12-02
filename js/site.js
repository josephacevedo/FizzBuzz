//  get values from user. get fizz value and buzz value.
function getValues() {
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  // parse numbers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  // check that numbers are integers
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    // call logic function
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    // call display function
    display(fbArray);
  } else {
    alert("You must enter a integer");
  }
}

// brains of the operation
function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];
  // loop from 1 to 100 and find factors of fizz and buzz value
  for (let i = 1; i <= 100; i++) {
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
    } else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}
// alternative with a switch statement. replace line 13 to see in action
function fizzBuzzB(fizzValue, buzzValue) {
  let returnArray = [];
  let Fizz = false;
  let Buzz = false;

  for (let i = 1; i <= 100; i++) {
    Fizz = i % fizzValue == 0;
    Buzz = i % buzzValue == 0;

    switch (true) {
      case Fizz && Buzz:
        {
          returnArray.push("FizzBuzz");
          break;
        }
      case Fizz:
        {
          returnArray.push("Fizz");
          break;
        }
      case Buzz:
        {
          returnArray.push("Buzz");
          break;
        }
      default: {
        returnArray.push(i);
        break;
      }
    }
  }

  return returnArray;
}

// another alternative using ternary replace line 13 to see in action
function fizzBuzzC(fizzValue,buzzValue){
  let returnArray = [];

  for(let i = 1; i <= 100; i++){
    let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '' ) || i);
    returnArray.push(value);
  }

  return returnArray;
}

// view
function display(fbArray) {
  let tableBody = document.getElementById("results");

  let templateRow = document.getElementById("fbTemplate");

  // clears the table after every run
  tableBody.innerHTML = "";

  for (let i = 0; i < fbArray.length; i += 5) {
    // grabs content inside the td and tr tags in the app.html
    let tableRow = document.importNode(templateRow.content, true);

    // make an array of all the td tags
    let rowCols = tableRow.querySelectorAll("td");

    // grabs the first td tag and sets text content to i
    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i];

    rowCols[1].classList.add(fbArray[i + 1]);
    rowCols[1].textContent = fbArray[i + 1];

    rowCols[2].classList.add(fbArray[i + 2]);
    rowCols[2].textContent = fbArray[i + 2];

    rowCols[3].classList.add(fbArray[i + 3]);
    rowCols[3].textContent = fbArray[i + 3];

    rowCols[4].classList.add(fbArray[i + 4]);
    rowCols[4].textContent = fbArray[i + 4];

    tableBody.appendChild(tableRow);
  }
}
