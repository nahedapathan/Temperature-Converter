const inputEl = document.querySelector(".input");
const outputEl = document.querySelector(".output");
const formularEl = document.querySelector(".formular");

let fromUnit = "kelvin";
let toUnit = "celcius";

//temp converter

const tempConverter = () => {
  //values from input
  const inputVal = inputEl.value;
  const outputVal = outputEl.value;

  //get units
  fromUnit = document.querySelector(".fromUnit").value;
  toUnit = document.querySelector(".toUnit").value;

  //results
  let result = 0;
  let formular = "";

  //convert from c to F
  if (fromUnit === "celcius" && toUnit === "fahrenheit") {
    //check if there is input val
    if (inputVal) {
      result = parseInt(inputVal) * 1.8 + 32;
      formular = `${inputVal} °C = ${result} °F`;
      //convert to 1 decimal place
      result = result.toFixed(1);
      formularEl.innerHTML = formular;
    }
  }

  //convert from c to K
  if (fromUnit === "celcius" && toUnit === "kelvin") {
    //check if there is input val
    if (inputVal) {
      result = parseInt(inputVal) + 273.15;
      formular = `${inputVal} °C = ${result} °K`;
      //convert to 1 decimal place
      result = result.toFixed(1);
      formularEl.innerHTML = formular;
    }
  }

  //convert F c to C
  if (fromUnit === "fahrenheit" && toUnit === "celcius") {
    //check if there is input val
    if (inputVal) {
      result = parseInt(((inputVal - 32) * 5) / 9);
      formular = `${inputVal} °C = ${result} °C`;
      //convert to 1 decimal place
      result = result.toFixed(1);
      formularEl.innerHTML = formular;
    }
  }

  //convert F c to K
  if (fromUnit === "fahrenheit" && toUnit === "celcius") {
    //check if there is input val
    if (inputVal) {
      result = parseInt(((inputVal - 32) * 5) / 9 + 273.15);
      formular = `${inputVal} °C = ${result} °C`;
      //convert to 1 decimal place
      result = result.toFixed(1);
      formularEl.innerHTML = formular;
    }
  }

  //convert K c to C
  if (fromUnit === "kelvin" && toUnit === "celcius") {
    //check if there is input val
    if (inputVal) {
      result = parseInt(inputVal - 273.15);
      formular = `${inputVal} °C = ${result} °C`;
      //convert to 1 decimal place
      result = result.toFixed(1);
      formularEl.innerHTML = formular;
    }
  }

  //convert K c to F
  if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    //check if there is input val
    if (inputVal) {
      result = parseInt(((inputVal - 273.15) * 9) / 5 + 32);
      formular = `${inputVal} °C = ${result} °F`;
      //convert to 1 decimal place
      result = result.toFixed(1);
      formularEl.innerHTML = formular;
    }
  }
};

//call the fn when input is changed

inputEl.addEventListener("input", () => {
  //temp converter
  tempConverter();
});

//call the fn when select option change

document.querySelector(".toUnit").addEventListener("input", () => {
  tempConverter();
});
