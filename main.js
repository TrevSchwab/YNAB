const selectAll = document.querySelector('#selectAll');
const minimize = document.querySelectorAll('.budget-content input[type="button"]');
const section = document.querySelectorAll('.category-header input[type="checkbox"]');
const budgetCheckbox = document.querySelectorAll('.budget-content input[type="checkbox"]');
const budgetRow = document.querySelectorAll('.sub-category');
const emailButton = document.querySelector('#user-id');


function highlight() {
  if (this.classList == "borderColor") {
    this.classList.remove('borderColor');
  } else {
    this.classList.add('borderColor');
  }
}
emailButton.addEventListener('mouseover', highlight);

function selectCheckbox() {
  if (this.checked) {
    this.closest('tr').classList.add('selected');
  } else {
  this.closest('tr').classList.remove('selected');
  }
}

function selectRow() {
  const checkbox = this.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    this.classList.add('selected');
  } else {
    this.classList.remove('selected');
  }
}

budgetCheckbox.forEach((item) => {
  item.addEventListener('change', selectCheckbox);
  item.addEventListener('click', (event) => event.stopPropagation());
});

budgetRow.forEach((item) => {
  item.addEventListener('click', selectRow);
});

function selectSection() {

    this.closest("tbody").querySelectorAll('.sub-category').forEach((item) => {
      item.checked=this.checked;



      if (this.checked) {
        item.classList.add('selected');
        item.closest("tbody").querySelectorAll('input[type="checkbox"]').forEach((box) => {
          box.checked=item.checked;
        });
      } else {
        item.classList.remove('selected');
        item.closest("tbody").querySelectorAll('input[type="checkbox"]').forEach((box) => {
          box.checked= item.checked;
        });
      }
    });
}

section.forEach((item) => {
  item.addEventListener('change', selectSection)
});

function allBoxes() {
  this.closest("table").querySelectorAll('input[type="checkbox"]').forEach((item) => {
    item.checked=this.checked;
  });
}

selectAll.addEventListener('change', allBoxes);

function toggle() {
  this.closest("tbody").querySelectorAll('.sub-category').forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "table-row";
    } else {
      item.style.display = "none";
    }
  });
}

minimize.forEach((item) => {
item.addEventListener('click', toggle);
});






const addAcountMenu = document.querySelector('#add-account');


function subMenu() {
  if (this.classList == "") {
    this.classList.add('subMenu');
  } else {
    this.classList.remove('subMenu');
  }
}

