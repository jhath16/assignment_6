  var summation = function() {

  var thimbles = Number(document.getElementById('thimbles').value) * 1;
  var swords = Number(document.getElementById('swords').value) * 37;

  var totalCost = thimbles + swords;
  document.getElementById('the-total').textContent = totalCost + ' ' + 'monies';
}

document.getElementById('update-button').onclick = summation;
