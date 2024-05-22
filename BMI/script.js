function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; 
  
    if (weight > 0 && height > 0) {
      var bmi = weight / (height * height);
      document.getElementById('result').innerHTML = "Your BMI is " + bmi.toFixed(1);
    } else {
      document.getElementById('result').innerHTML = "Please enter valid values for weight and height.";
    }
  }
  