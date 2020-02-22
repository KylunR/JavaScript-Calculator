/*
    Kylun Robbins
    02/21/2020
*/

let prevVal = "";               // Old value (if any) to work on
let newVal = "";                // New value to work with
let resultVal = "";             // Keeps track of the answer to be displayed
let mathOperator = "";          // Keeps track of current operator
let decimalCount = false;       // Keeps track if the decimal has been clicked
let memoryVal = "";             // Stores value for memory buttons


/*
    Function for number buttons
 */
function numberButtonPress(num) 
{
    // If there already is a resultVal
    if(resultVal)
    {
        newVal = num;       // Store new value
        resultVal = "";     // Clear previous result
    }
    else
    {
        // If to prevent multiple decimal points
        if(num === '.')
        {
            if(decimalCount != true)
            {
                newVal += num;  
                decimalCount = true;
            }
        }
        else
        {
            newVal += num; 
        }
    }

    document.getElementById("entry").value = newVal;    // Update Display
}

/*
    Function for operator buttons

 */
function mathButtonPress(operator) 
{
    if(!resultVal)              // If there isn't a previous result
    {
        prevVal = newVal;       // New value becomes previous result
    }
    else                        // If there is a result
    {
        prevVal = resultVal;    // Previous value becomes the result
    }

    newVal = "";                // Clear newVal for next number
    decimalCount = false;       // Reset decimal tracker
    mathOperator = operator;    // Store operator
    resultVal = "";             

    document.getElementById("entry").value = prevVal;    // Update display for new numbers
}

/*
    Function for = button
 */
function equalButtonPress() 
{
    decimalCount == false;      // Reset decimal Counter
    
    // Convert strings to floats for calculation
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(mathOperator)
    {
        // Perform operator calculation
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        // If no operator keep value
        default:
            resultVal = newVal;
    }

    prevVal = resultVal;    // Set result to prevVal for upcoming calculations

    document.getElementById("entry").value = resultVal;     // Update Dispaly
}

/*
    Function for AC (clear) button
    Clears all stored values and resets
    Resets display value to 0
 */
function clearButtonPress() 
{
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalCount = false;
    document.getElementById("entry").value = "0";
}

/*
    Function for MC (copy) button
    Gets current value on calculator and stores it
 */
function copyButtonPress() 
{
    memoryVal = document.getElementById("entry").value;
}

/*
    Function for MP (paste) button
    First checks if there is a current stored value
    If so, displays the value and stores it in newVal
 */
function pasteButtonPress() 
{
    if(memoryVal)
    {
        document.getElementById("entry").value = memoryVal;
        newVal = memoryVal;
    }
}