var age = 25;
function displayAge() {
  console.log("Age inside displayAge:", age);
}

function changeAge() {
  age = 30; // modifies the global variable
  console.log("Age inside changeAge after update:", age);
}


changeAge();     
displayAge();  
displayAge();   