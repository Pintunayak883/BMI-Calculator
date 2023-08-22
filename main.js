function cal() {
    let h = document.getElementById("hinp").value;
    let w = document.getElementById("winp").value;
    let r = document.getElementById("result");
    let bmi = w / (h / 100 * h / 100);
    let total = bmi.toFixed(2);
    let result = r.innerHTML = "Your BMI is " + total;
}