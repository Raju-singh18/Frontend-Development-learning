
// Available in regular functions, not arrow functions.

function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

