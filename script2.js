document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const heightElement = document.getElementById('height');
    const weightElement = document.getElementById('weight');
    const height = parseFloat(heightElement.value) / 100;
    const weight = parseFloat(weightElement.value);

    // Check for valid weight
    if (weight < 10 || weight > 500) {
        alert("Please enter a valid value for weight.");
        weightElement.focus();
        return;
    }

    // Check for valid height
    if (heightElement.value < 50 || heightElement.value > 300) {
        alert("Please enter a valid value for height.");
        heightElement.focus();
        return;
    }

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

    console.log(result);
    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${result})`;
});
