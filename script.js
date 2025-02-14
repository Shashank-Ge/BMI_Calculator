document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height);
    let result = '';

    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        result = 'Overweight';
    } else {
        result = 'Obesity';
    }

      console.log ( result ) 
    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${result})`;
    //alert(`Your BMI is ${bmi.toFixed(2)} (${result})`);
});
