
const budgetCheckbox = document.querySelectorAll('.budget-content input[type="checkbox"]');

function selectRow() {
  this.closest('tr').classList.add('selected');
}

budgetCheckbox.forEach((item) => {
  item.addEventListener('change', selectRow);
});
