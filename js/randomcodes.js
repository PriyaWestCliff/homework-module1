/* -- RANDOM CODES -- */

// Function to generate combination of characters
function generateCode() {
    // Create variables to store generated code and the characters we want to use
    var code = ''; // initialize to an null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    
    // Generate a character 8 times using a loop
    for (var i = 1; i <= 8; i++) {
        // Randomly select a character from the string
        var char = Math.random() * str.length;
        // Accumulate the selected character into the code string
        code += str.charAt(char);
    }

    // Return the final accumulated string after the loop ends
    return code;
}

// Display the generated code in an HTML element
document.getElementById("codes").innerHTML = generateCode(); 

// Disable Button function
function disableButton() {
    document.getElementById("submit").disabled = true; 
}

// Activate disableButton function
disableButton();