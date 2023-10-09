function convert() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");
    
    if (celsiusInput.value !== "") {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = celsius * 9/5 + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        resultElement.innerHTML = celsius + " °C is equal to " + fahrenheit.toFixed(2) + " °F";
    } else if (fahrenheitInput.value !== "") {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        var celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
        resultElement.innerHTML = fahrenheit + " °F is equal to " + celsius.toFixed(2) + " °C";
    } else {
        resultElement.innerHTML = "Please enter a temperature.";
    }
}






