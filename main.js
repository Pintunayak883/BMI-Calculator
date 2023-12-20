function cal() {
  let h = document.getElementById("hinp").value;
  let w = document.getElementById("winp").value;
  let r = document.getElementById("result");
  if (h === "" || w === "") {
    r.innerHTML = "Please enter values for height and weight.";
  } else if (isNaN(h) || isNaN(w)) {
    r.innerHTML = "Please enter valid values for height and weight.";
  } else {
    let bmi = w / (((h / 100) * h) / 100);
    let total = bmi.toFixed(2);
    let result = (r.innerHTML = "Your BMI is " + total);
  }
}
