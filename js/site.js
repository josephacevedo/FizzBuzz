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

// view
function display(fbArray) {
  let tableBody = document.getElementById("results");

  let templateRow = document.getElementById("fbTemplate");

  // clears the table after every run
  tableBody.innerHTML = "";

  for (let i = 0; i < fbArray.length; i += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].textContent = fbArray[i];
    rowCols[1].textContent = fbArray[i + 1];
    rowCols[2].textContent = fbArray[i + 2];
    rowCols[3].textContent = fbArray[i + 3];
    rowCols[4].textContent = fbArray[i + 4];

    tableBody.appendChild(tableRow);
  }
}

// watch video from the top to get names of IDs
