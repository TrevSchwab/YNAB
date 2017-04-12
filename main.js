
const budgetCheckbox = document.querySelectorAll('.budget-content input[type="checkbox"]');

function selectRow() {
  if (this.checked) {
    this.closest('tr').classList.add('selected');
  } else {
  this.closest('tr').classList.remove('selected');
  }
}

budgetCheckbox.forEach((item) => {
  item.addEventListener('change', selectRow);
});
