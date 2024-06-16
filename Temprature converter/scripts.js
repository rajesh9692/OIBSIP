function convertTemperature() {
    const celsiusInput = document.getElementById('Celsius');
    const fahrenheitInput = document.getElementById('Fahrenheit');
    const kelvinInput = document.getElementById('Kelvin');
    
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const kelvinValue = parseFloat(kelvinInput.value);

    let celsiusTemp;

    if (!isNaN(celsiusValue)) {
        celsiusTemp = celsiusValue;
        fahrenheitInput.value = (celsiusValue * 9/5) + 32;
        kelvinInput.value = celsiusValue + 273.15;
    } else if (!isNaN(fahrenheitValue)) {
        celsiusTemp = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusTemp;
        kelvinInput.value = celsiusTemp + 273.15;
    } else if (!isNaN(kelvinValue)) {
        celsiusTemp = kelvinValue - 273.15;
        celsiusInput.value = celsiusTemp;
        fahrenheitInput.value = (celsiusTemp * 9/5) + 32;
    } else {
        alert('Please enter a valid temperature');
        return;
    }
}
