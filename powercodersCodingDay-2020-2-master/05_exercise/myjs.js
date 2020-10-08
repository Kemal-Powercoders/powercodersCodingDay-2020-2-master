  var getFirstValue = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];
  getFirstValue.sort(function(a, b){return a.localeCompare(b)});
  alert(getFirstValue);