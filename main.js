const selectAll = document.querySelector('#selectAll');
const minimize = document.querySelectorAll('.minimize');
const section = document.querySelectorAll('.category-header input[type="checkbox"]');
const budgetCheckbox = document.querySelectorAll('.budget-content input[type="checkbox"]');
const budgetRow = document.querySelectorAll('.sub-category');

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

    this.closest("tbody").querySelectorAll('.sub-category input[type="checkbox"]').forEach((item) => {
      item.checked=this.checked;
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



 if(document.getElementsByClassName("hidethis").style.display=='none' ){
   document.getElementsByClassName("hidethis").style.display = '.sub-category';
 }else{
   document.getElementsByClassName("hidethis").style.display = 'none';
 }

