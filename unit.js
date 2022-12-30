
var input = document.getElementById('nofrom');
var result = document.getElementById('noto');

var from;
var to;

input.addEventListener("keyup", myResult);

document.getElementById('unitfrom').onchange = function () { myResult() };
document.getElementById('unitto').onchange = function () { myResult() };

from = document.getElementById('unitfrom').value;
to = document.getElementById('unitto').value;


function myResult() {
  from = document.getElementById('unitfrom').value;
  to = document.getElementById('unitto').value;

  if (isNaN(input.value)) {
    document.getElementById("error").textContent = "*Please provide number*";
  }
  if (!isNaN(input.value)) {
    document.getElementById("error").textContent = "";
  }

  if (from === "meter") {
    if (to === "kilometer") {
      result.value = Number(input.value) * 0.001;
    } else if (to === "centimeter") {
      result.value = Number(input.value) * 100;
    } else if (to === "meter") {
      result.value = Number(input.value);
    } else if (to === "millimeter") {
      result.value = Number(input.value) * 1000;
    } else if (to === "micrometer") {
      result.value = Number(input.value) * 1000000;
    } else if (to === "nanometer") {
      result.value = Number(input.value) * 1000000000;
    } else if (to === "mile") {
      result.value = Number(input.value) * 0.0006213689;
    }

  } else if (from === "kilometer") {
    if (to === "kilometer") {
      result.value = Number(input.value);
    } else if (to === "centimeter") {
      result.value = Number(input.value) * 10000;
    } else if (to === "meter") {
      result.value = Number(input.value) * 1000;
    } else if (to === "millimeter") {
      result.value = Number(input.value) * 1000000;
    } else if (to === "micrometer") {
      result.value = Number(input.value) * 1000000000;
    } else if (to === "nanometer") {
      result.value = Number(input.value) * 1000000000000;
    } else if (to === "mile") {
      result.value = Number(input.value) * 0.6213688756;
    }
  } else if (from === "centimeter") {
    if (to === "kilometer") {
      result.value = Number(input.value) * 0.00001;
    } else if (to === "centimeter") {
      result.value = Number(input.value);
    } else if (to === "meter") {
      result.value = Number(input.value) * 0.01;
    } else if (to === "millimeter") {
      result.value = Number(input.value) * 10;
    } else if (to === "micrometer") {
      result.value = Number(input.value) * 10000;
    } else if (to === "nanometer") {
      result.value = Number(input.value) * 10000000;
    } else if (to === "mile") {
      result.value = Number(input.value) * 0.0000062137;
    }
  } else if (from === "millimeter") {
    if (to === "kilometer") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "centimeter") {
      result.value = Number(input.value) * 0.1;
    } else if (to === "meter") {
      result.value = Number(input.value) * 0.001;
    } else if (to === "millimeter") {
      result.value = Number(input.value) * 1;
    } else if (to === "micrometer") {
      result.value = Number(input.value) * 1000;
    } else if (to === "nanometer") {
      result.value = Number(input.value) * 1000000;
    } else if (to === "mile") {
      result.value = Number(input.value) * 6.213688756E-7;
    }
  } else if (from === "micrometer") {
    if (to === "kilometer") {
      result.value = Number(input.value) * 9.999999999E-10;
    } else if (to === "centimeter") {
      result.value = Number(input.value) * 0.0001;
    } else if (to === "meter") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "millimeter") {
      result.value = Number(input.value) * 0.001;
    } else if (to === "micrometer") {
      result.value = Number(input.value) * 1;
    } else if (to === "nanometer") {
      result.value = Number(input.value) * 1000;
    } else if (to === "mile") {
      result.value = Number(input.value) * 6.213688756E-10;
    }
  } else if (from === "nanometer") {
    if (to === "meter") {
      result.value = Number(input.value) * 1.E-9;
    } else if (to === "kilometer") {
      result.value = Number(input.value) * 1.E-12;
    } else if (to === "centimeter") {
      result.value = Number(input.value) * 1.E-7;
    } else if (to === "millimeter") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "micrometer") {
      result.value = Number(input.value) * 0.001;
    } else if (to === "nanometer") {
      result.value = Number(input.value) * 1;
    } else if (to === "mile") {
      result.value = Number(input.value) * 6.213688756E-13;
    }
  }
  else if (from === "mile") {
    if (to === "meter") {
      result.value = Number(input.value) * 1609.35;
    } else if (to === "kilometer") {
      result.value = Number(input.value) * 1.60935;
    } else if (to === "centimeter") {
      result.value = Number(input.value) * 160935;
    } else if (to === "millimeter") {
      result.value = Number(input.value) * 1609350;
    } else if (to === "micrometer") {
      result.value = Number(input.value) * 1609350000;
    } else if (to === "nanometer") {
      result.value = Number(input.value) * 1609350000000;
    } else if (to === "mile") {
      result.value = Number(input.value) * 1;
    }
  } else if (from === "kilogram") {
    if (to === "kilogram") {
      result.value = Number(input.value) * 1;
    } else if (to === "gram") {
      result.value = Number(input.value) * 1000;
    } else if (to === "milligram") {
      result.value = Number(input.value) * 1000000;
    } else if (to === "metricton") {
      result.value = Number(input.value) * 0.001;
    } else if (to === "longton") {
      result.value = Number(input.value) * 0.009842073;
    } else if (to === "shortton") {
      result.value = Number(input.value) * 0.0011023122;
    }
  } else if (from === "gram") {
    if (to === "kilogram") {
      result.value = Number(input.value) * 0.001;
    } else if (to === "gram") {
      result.value = Number(input.value) * 1;
    } else if (to === "milligram") {
      result.value = Number(input.value) * 1000;
    } else if (to === "metricton") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "longton") {
      result.value = Number(input.value) * 9.842073304E-7;
    } else if (to === "shortton") {
      result.value = Number(input.value) * 0.0000011023;
    }
  } else if (from === "milligram") {
    if (to === "kilogram") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "gram") {
      result.value = Number(input.value) * 0.001;
    } else if (to === "milligram") {
      result.value = Number(input.value) * 1;
    } else if (to === "metricton") {
      result.value = Number(input.value) * 9.999999999E-10;
    } else if (to === "longton") {
      result.value = Number(input.value) * 9.842073304E-10;
    } else if (to === "shortton") {
      result.value = Number(input.value) * 1.10231221E-9;
    }
  } else if (from === "metricton") {
    if (to === "kilogram") {
      result.value = Number(input.value) * 1000;
    } else if (to === "gram") {
      result.value = Number(input.value) * 1000000;
    } else if (to === "milligram") {
      result.value = Number(input.value) * 1000000000;
    } else if (to === "metricton") {
      result.value = Number(input.value);
    } else if (to === "longton") {
      result.value = Number(input.value) * 0.9842073304;
    } else if (to === "shortton") {
      result.value = Number(input.value) * 1.023122101;
    }
  } else if (from === "longton") {
    if (to === "kilogram") {
      result.value = Number(input.value) * 1016.04608;
    } else if (to === "gram") {
      result.value = Number(input.value) * 1016046.08;
    } else if (to === "milligram") {
      result.value = Number(input.value) * 1016046080;
    } else if (to === "metricton") {
      result.value = Number(input.value) * 1.01604608;
    } else if (to === "longton") {
      result.value = Number(input.value);
    } else if (to === "shortton") {
      result.value = Number(input.value) * 1.12;
    }
  } else if (from === "shortton") {
    if (to === "kilogram") {
      result.value = Number(input.value) * 907.184;
    } else if (to === "gram") {
      result.value = Number(input.value) * 907184;
    } else if (to === "milligram") {
      result.value = Number(input.value) * 907184000;
    } else if (to === "metricton") {
      result.value = Number(input.value) * 0.907184;
    } else if (to === "longton") {
      result.value = Number(input.value) * 0.8928571429;
    } else if (to === "shortton") {
      result.value = Number(input.value) * 1;
    }
  } else if (from === "squaremeter") {
    if (to === "squaremeter") {
      result.value = Number(input.value) * 1;
    } else if (to === "squarekilometer") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "squarecentimeter") {
      result.value = Number(input.value) * 10000;
    } else if (to === "squaremillimeter") {
      result.value = Number(input.value) * 1000000;
    } else if (to === "squaremicrometer") {
      result.value = Number(input.value) * 1000000000000;
    } else if (to === "squaremile") {
      result.value = Number(input.value) * 3.861018768E-7;
    }
  } else if (from === "squarekilometer") {
    if (to === "squaremeter") {
      result.value = Number(input.value) * 1000000;
    } else if (to === "squarekilometer") {
      result.value = Number(input.value) * 1;
    } else if (to === "squarecentimeter") {
      result.value = Number(input.value) * 10000000000;
    } else if (to === "squaremillimeter") {
      result.value = Number(input.value) * 1000000000000;
    } else if (to === "squaremicrometer") {
      result.value = Number(input.value) * 1000000000000000000;
    } else if (to === "squaremile") {
      result.value = Number(input.value) * 0.3861018768;
    }
  } else if (from === "squarecentimeter") {
    if (to === "squaremeter") {
      result.value = Number(input.value) * 0.0001;
    } else if (to === "squarekilometer") {
      result.value = Number(input.value) * 1.E-10;
    } else if (to === "squarecentimeter") {
      result.value = Number(input.value) * 1;
    } else if (to === "squaremillimeter") {
      result.value = Number(input.value) * 100;
    } else if (to === "squaremicrometer") {
      result.value = Number(input.value) * 100000000;
    }
  } else if (from === "squaremillimeter") {
    if (to === "squaremeter") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "squarekilometer") {
      result.value = Number(input.value) * 1.E-12;
    } else if (to === "squarecentimeter") {
      result.value = Number(input.value) * 0.01;
    } else if (to === "squaremillimeter") {
      result.value = Number(input.value) * 1;
    } else if (to === "squaremicrometer") {
      result.value = Number(input.value) * 1000000;
    }
  } else if (from === "squaremicrometer") {
    if (to === "squaremeter") {
      result.value = Number(input.value) * 1.E-12;
    } else if (to === "squarekilometer") {
      result.value = Number(input.value) * 1.E-18;
    } else if (to === "squarecentimeter") {
      result.value = Number(input.value) * 9.999999999E-9;
    } else if (to === "squaremillimeter") {
      result.value = Number(input.value) * 0.000001;
    } else if (to === "squaremicrometer") {
      result.value = Number(input.value) * 1;
    }
  } else if (from === "celsius") {
    if (to === "celsius") {
      result.value = Number(input.value) * 1;
    } else if (to === "kelvin") {
      result.value = Number(input.value) + 273.15;
    } else if (to === "fahrenheit") {
      result.value = Number(input.value) * (9 / 5) + 32;
    }
  } else if (from === "kelvin") {
    if (to === "celsius") {
      result.value = Number(input.value) - 273.15;
    } else if (to === "kelvin") {
      result.value = Number(input.value) * 1;
    } else if (to === "fahrenheit") {
      result.value = (Number(input.value) - 273.15) * (9 / 5) + 32;
    }
  } else if (from === "fahrenheit") {
    if (to === "celsius") {
      result.value = (Number(input.value) - 32) * (5 / 9);
    } else if (to === "kelvin") {
      result.value = (Number(input.value) - 32) * (5 / 9) + 273.15;
    } else if (to === "fahrenheit") {
      result.value = Number(input.value) * 1;
    }
  }
}


