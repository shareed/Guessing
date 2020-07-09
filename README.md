# Guessing

#####JavaScript and random numbers
JavaScript has a built-in function called Math.random that produces a random decimal number between 0 and 1. By multiplying this number, you can get a random number between 0 and any other number. For example, to get a number between 0 and 100, you multiply the result of Math.random by 100, like this:

myRandomNumber = Math.random()*100;
This works because the smallest random number Math.random can create is 0, and 0 * 100=0. The largest random number is 1, and 1 * 100 = 100. And with any random number in between, you get a number in between 0 and 100. For example, 0.25 * 100 = 25.

Math.random produces a decimal number, for example 0.245834. For your game, you only want whole numbers (integers), because only those work as colour values. So you need to round the result of Math.random. Luckily, JavaScript has a built-in function called Math.round to help you round decimal number. So to get a whole number between 0 and 100, you would write:

myRandomNumber = Math.round(Math.random()*100);