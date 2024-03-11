document.getElementById("btn").onclick = function () {
  const num1 = document.getElementById("var1").value;
  const num2 = document.getElementById("var2").value;
  const num3 = document.getElementById("var3").value;
  let largest;

  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  document.getElementById('res').innerHTML = "The largest number is " + largest;
};
