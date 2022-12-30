
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


/* function lengths() {
  console.log("length-clicked");
  var item = document.getElementById("content");
  var newitem = document.createElement('div');
  newitem.innerHTML = `<div class="lengthunit row" id="content">
    <div class="col-lg-6">
        <input type="number" id="nofrom" /><br />
        <select name="unitfrom" id="unitfrom">
          <option value="meter">meter</option>
          <option value="centimeter">centimeter</option>
          <option value="kilometer">kilometer</option>
          <option value="millimeter">millimeter</option>
          <option value="micrometer">micrometer</option>
          <option value="nanometer">nanometer</option>
          <option value="mile">mile</option>
        </select>
      </div>
      <div class="col-lg-6">
        <input type="number" id="noto" /><br />
        <select name="unitto" id="unitto">
          <option value="meter">meter</option>
          <option value="centimeter">centimeter</option>
          <option value="kilometer">kilometer</option>
          <option value="millimeter">millimeter</option>
          <option value="micrometer">micrometer</option>
          <option value="nanometer">nanometer</option>
          <option value="mile">mile</option>
        </select>
      </div>
`;
  item.parentNode.replaceChild(newitem, item);
}
function area() {
  console.log("clicked");
  document.getElementById("content").innerHTML = `<div class="lengthunit row" id="content">
  <div class="col-lg-6">
    <div class="row">
      <div class="col-lg-6">
        <input type="number" id="nofrom" onclick="myResult()"/><br />
        <select name="unitfrom" id="unitfrom">
          <option value="meter">meter</option>
          <option value="centimeter">centimeter</option>
          <option value="kilometer">kilometer</option>
          <option value="millimeter">millimeter</option>
          <option value="micrometer">micrometer</option>
          <option value="nanometer">nanometer</option>
          <option value="mile">mile</option>
        </select>
      </div>
      <div class="col-lg-6">
        <input type="number" id="noto" /><br />
        <select name="unitto" id="unitto">
          <option value="meter">meter</option>
          <option value="centimeter">centimeter</option>
          <option value="kilometer">kilometer</option>
          <option value="millimeter">millimeter</option>
          <option value="micrometer">micrometer</option>
          <option value="nanometer">nanometer</option>
          <option value="mile">mile</option>
        </select>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <h1>hello</h1>
  </div>
</div>
`;
}

function temperature() {
  console.log("clicked");
  document.getElementById("content").innerHTML = `<div class="lengthunit row" id="content">
    <div class="col-lg-6">
      <input type="number" id="nofrom" /><br />
      <select name="unitfrom" id="unitfrom">
        <option value="meter">Temp</option>
        <option value="centimeter">centimeter</option>
        <option value="kilometer">kilometer</option>
      </select>
    </div>
    <div class="col-lg-6">
      <input type="number" id="noto" /><br />
      <select name="unitto" id="unitto">
        <option value="meter">celcius</option>
        <option value="centimeter">centimeter</option>
        <option value="kilometer">kilometer</option>
      </select>
    </div>
  </div>
`;
} */
/* var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Area";
unit[0] = new Array("Square meter (m^2)", "Acre (acre)", "Are", "Barn (barn)", "Hectare", "Rood", "Square centimeter", "Square kilometer", "Circular mil", "Square foot (ft^2)", "Square inch (in^2)", "Square mile (mi^2)", "Square yard (yd^2)");
factor[0] = new Array(1, 4046.856, 100, 1E-28, 10000, 1011.71413184285, .0001, 1000000, 5.067075E-10, 9.290304E-02, 6.4516E-04, 2589988, .8361274);

property[1] = "Length";
unit[1] = new Array("Meter (m)", "Centimeter (cm)", "Kilometer (km)", "Foot (ft)", "Inch (in)", "Micrometer (mu-m)", "Millimeter (mm)", "Nanometer (nm)", "Mile ", "Yard (yd)");
factor[1] = new Array(1, .01, 1000, .3048, .0254, .000001, .001, 1E-9, 1852, .9144);

property[2] = "Mass";
unit[2] = new Array("Kilogram (kgr)", "Gram (gr)", "Milligram (mgr)", "Microgram (mu-gr)", "Carat (metric)(ct)", "Hundredweight (long)", "Hundredweight (short)", "Pound mass (lbm)", "Pound mass (troy)", "Ounce mass (ozm)", "Ounce mass (troy)", "Slug", "Ton (assay)", "Ton (long)", "Ton (short)", "Ton (metric)", "Tonne");
factor[2] = new Array(1, .001, 1e-6, .000000001, .0002, 50.80235, 45.35924, .4535924, .3732417, .02834952, .03110348, 14.5939, .02916667, 1016.047, 907.1847, 1000, 1000);

property[3] = "Temperature";
unit[3] = new Array("Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)", "Degrees Rankine ('R)");
factor[3] = new Array(1, 0.555555555555, 1, 0.555555555555);
tempIncrement = new Array(0, -32, -273.15, -491.67);

property[4] = "Time";
unit[4] = new Array("Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)");
factor[4] = new Array(1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, .9972696, 31536000, 31556930, 31558150);


// ===========
//  Functions
// ===========

function UpdateUnitMenu(propMenu, unitMenu) {
    // Updates the units displayed in the unitMenu according to the selection of property in the propMenu.
    var i;
    i = propMenu.selectedIndex;
    FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
    // Fills the options of myMenu with the elements of myArray.
    // !CAUTION!: It replaces the elements, so old ones will be deleted.
    var i;
    myMenu.length = myArray.length;
    for (i = 0; i < myArray.length; i++) {
        myMenu.options[i].text = myArray[i];
    }
}

function CalculateUnit(sourceForm, targetForm) {
    // A simple wrapper function to validate input before making the conversion
    var sourceValue = sourceForm.unit_input.value;

    // First check if the user has given numbers or anything that can be made to one...
    sourceValue = parseFloat(sourceValue);
    if (!isNaN(sourceValue) || sourceValue == 0) {
        // If we can make a valid floating-point number, put it in the text box and convert!
        sourceForm.unit_input.value = sourceValue;
        ConvertFromTo(sourceForm, targetForm);
    }
}

function ConvertFromTo(sourceForm, targetForm) {
    // Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
    var propIndex;
    var sourceIndex;
    var sourceFactor;
    var targetIndex;
    var targetFactor;
    var result;

    // Start by checking which property we are working in...
    propIndex = document.property_form.the_menu.selectedIndex;

    // Let's determine what unit are we converting FROM (i.e. source) and the factor needed to convert that unit to the base unit.
    sourceIndex = sourceForm.unit_menu.selectedIndex;
    sourceFactor = factor[propIndex][sourceIndex];

    // Cool! Let's do the same thing for the target unit - the units we are converting TO:
    targetIndex = targetForm.unit_menu.selectedIndex;
    targetFactor = factor[propIndex][targetIndex];

    // Simple, huh? let's do the math: a) convert the source TO the base unit: (The input has been checked by the CalculateUnit function).

    result = sourceForm.unit_input.value;
    // Handle Temperature increments!
    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) + tempIncrement[sourceIndex];
    }
    result = result * sourceFactor;

    // not done yet... now, b) use the targetFactor to convert FROM the base unit
    // to the target unit...
    result = result / targetFactor;
    // Again, handle Temperature increments!
    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) - tempIncrement[targetIndex];
    }

    // Ta-da! All that's left is to update the target input box:
    targetForm.unit_input.value = result;
}

// This fragment initializes the property dropdown menu using the data defined above in the 'Data Definitions' section
window.onload = function (e) {
    FillMenuWithArray(document.property_form.the_menu, property);
    UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
    UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu)
}

// Restricting textboxes to accept numbers + navigational keys only
document.getElementByClass('numbersonly').addEventListener('keydown', function (e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
        (key == 65 && (e.ctrlKey || e.metaKey)) || // Select All 
        (key == 67 && (e.ctrlKey || e.metaKey)) || // Copy
        (key == 86 && (e.ctrlKey || e.metaKey)) || // Paste
        (key >= 35 && key <= 40) || // End, Home, Arrows
        (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || // Numeric Keys
        (key >= 96 && key <= 105) // Numpad
            (key == 190) // Numpad
    )) e.preventDefault();
});
 */
/* var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var from, to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
from = inputType.value;
to = resultType.value;


function myResult() {


    // when we change the input and output type vale we need to updata the 
    // from and to

    from = inputType.value;
    to = resultType.value;


    // now compare the input and resultType value and add formula

    if (from === "meter" && to === "kilometer") {
        //this is meter to kilometer formula 
        result.value = Number(input.value) * 0.001;
    }


} */

/* let button = document.querySelectorAll('.menu button');
let content_inside = document.getElementById('content_inside');

Array.from(button).forEach(function (buttonArray, i) {
    buttonArray.addEventListener('click', function () {

        Array.from(button).forEach(buttonAll => buttonAll.classList.remove('button_active'));

        Array.from(content_inside).forEach(content_insideAll => content_insideAll.classList.remove('content_inside_active'));

        button[i].classList.add('button_active');

        content_inside[i].classList.add('content_inside_active');
    });
}); */