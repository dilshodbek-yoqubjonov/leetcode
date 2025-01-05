var convertTemperature = function (celsius) {
  let result = [];

  let [kelvin, farenheit] = [celsius + 273.15, celsius * 1.8 + 32.0];
  result.push(Number(kelvin), Number(farenheit));
  return result;
};

console.log(convertTemperature(36.5));

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

//https://leetcode.com/problems/convert-the-temperature
