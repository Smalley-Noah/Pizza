# Pizza

This class is designed to create pizza objects that eventually will be ordered by the user. The three instance variables are size, meat toppings and veggie toppings. There are three instance functions sizecost(), toppingcost(), and price(). Finally there is one class function promotionalDeal()

## The constructor
  -  **size** should be a string which could represent "S", "M", "L", or "XL"
  -  **meatToppings** should be an array where each item is a string with the name of that topping.
  -  **veggieToppings** should be an array where each item is a string with the name of that topping.

## Instance Functions

#### sizeCost()
This function will use a series of conditional statements to return the **cost** of the pizza size. This function **does not** use any inputs.
  -  Small (S)  = 7.99
  -  Medium (M) = 9.99
  -  Large (L) = 12.99
  -  Extra-Large (XL) = 15.99

#### toppingCost()
This function will take one input, **top**. This function will first use a conditional to separate if your topping top is "meat" or "veggie". Meat toppings are 0.99 extra and veggie toppings are 0.50 extra.

  -  If you have top == "meat" you should return the product of the number of meat toppings and 0.99.
  -  If you have top == "veggie" you should return the product of the number of veggie toppings and 0.50

#### price()
This function will return the total price of the pizza. You will need to need to reuse the two functions above. If done correctly, this will be one line of code. Make sure you consider all 3 instance variables in your price.

## Class Functions

#### promotionalDeal
This function will accept two inputs: **pizza** which is an object and **percent** which represents how much you will take off the price. Write a function that will return the new cost of the pizza after the promotional deal.

## Extra

#### addTopping()
This should be an additional instance function which helps users go back and edit changes to their pizza if they made a mistake. AddTopping will accept two inputs, **toptype** and **newtop**. Both of these should be thought of as strings.

  -  If toptype == "meat" then you should add the newtop to the meatToppings array.
  -  If toptype == "veggie" then you should add the newtop to the veggieToppings array.

#### removeTopping()
This function will accept the same two inputs of **toptype** and **newtop**. However instead of adding the newtop to the correct array, you will remove it. For ideas on how to do this, read these links.

[indexOf] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)  
[splice] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
