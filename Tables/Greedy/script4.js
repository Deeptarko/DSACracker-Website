//Getting all the elements needed from the DOM
const input = document.getElementById("searchItem");
const table = document.getElementById("table");
const tableRows = table.querySelectorAll("tbody tr");
const checkBoxes = table.querySelectorAll(".check");
const cBox = document.getElementById("customCheck1");
const saveBtn = document.getElementById("saveBtn");
const showBtn = document.getElementById("showBtn");




//Function to search an item in the table
const searchItem = (e) => {
  const val = e.target.value;

  tableRows.forEach((row) => {
    const check = row
      .getElementsByTagName("td")[2]
      .textContent.toLowerCase()
      .startsWith(val);
    if (!check) {
      row.style.display = "none";
    } else {
      row.style.display = "";
    }
  });
};

//Function to save the current state of the check boxes
const save = () => {
  let count = 0;
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      localStorage.setItem("key-greedy" + i, 1);
      count = count + 1;
    } else {
      localStorage.setItem("key-greedy" + i, 0);
    }
  }
  localStorage.setItem('totalQuesDone-7',count);
};

//Function to load the current state of the check boxes
const load = () => {
  for (let i = 0; i < checkBoxes.length; i++) {
    let temp = localStorage.getItem("key-greedy" + i);
    // console.log(temp);
    if (temp == 1) {
      checkBoxes[i].checked = true;
      console.log(checkBoxes[i]);
    } else {
      checkBoxes[i].checked = false;
    }
  }
};

//Event Listeners
input.addEventListener("keyup", searchItem);
saveBtn.addEventListener("click", save);
showBtn.addEventListener("click", load);
