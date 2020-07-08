var heading;

//buttons isn’t a regular variable like heading, it is an array. 
//An array is a list of things. The buttons array contains anything with the class name color-button.
var buttons = document.getElementsByClassName('color-button');

heading = document.getElementById('color-value');

//changes the contents of the element
heading.innerHTML = 'Hello world!';

function setButtonColor(button, red, green, blue){
    // changes the CSS style rule for the button
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}


//takes the first button in the array and changes the button colour to blue using your
setButtonColor(buttons[0], 0, 0, 255);