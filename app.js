
// Question # 1
document.write("<h1>Question # 1</h1>")
var x  = 3
var y = 5
var z = x+y
document.write( " Sum of 3 and 5 is"+ " " + z)


// Question # 2
document.write("<h1>Question # 2</h1>")
document.write("<h2>subtraction</h2>")
var x  = 3
var y = 5
var z = x-y
document.write(" <h3> subtraction of is " + x +"and "+y+"Total "+z + "</h3>")


document.write("<h2>multiplication</h2>")
var x  = 3
var y = 5
var z = x*y
document.write(" <h3> multiplication of is " + x +"and "+y+"Total "+z + "</h3>")
 
document.write("<h2>division</h2>")
var x  = 3
var y = 5
var z = x/y
document.write(" <h3> division of is " + x +"and "+y+"Total "+z + "</h3>")

document.write("<h2>modulus</h2>")
var x  = 3
var y = 5
var z = x%y
document.write(" <h3> modulus of is " + x +"and "+y+"Total "+z + "</h3>")


// Question # 3
document.write("<h1>Question # 3</h1>")

// var user;
// document.write("Value after variable declaration is"+" "+user) 





// Question # 4
document.write("<h1>Question # 4</h1>")
var x  = 600
var y = 5
var z = x*y
document.write( " Total cost to buy 5 tickets to a movie is"+ " " + z)






// Question # 5
document.write("<h1>Question # 6</h1>")

var table =prompt("Enter table Number")
document.write("Table of "+" " + table +  "<br>")

document.write(table + "x" + 1 + "=" + table*1 + "<br>")
document.write(table + "x" + 2 + "=" + table*2+ "<br>")
document.write(table + "x" + 3 + "=" + table*3+ "<br>")
document.write(table + "x" + 4 + "=" + table*4+ "<br>")
document.write(table + "x" + 5 + "=" + table*5+ "<br>")
document.write(table + "x" + 6 + "=" + table*6+ "<br>")
document.write(table + "x" + 7 + "=" + table*7+ "<br>")
document.write(table + "x" + 8 + "=" + table*8+ "<br>")
document.write(table + "x" + 9 + "=" + table*9+ "<br>")
document.write(table + "x" + 10 + "=" + table*10+ "<br>")


// Question # 6
document.write("<h1>Question # 5</h1>")





// Question # 7
document.write("<h1>Question # 7</h1>")

document.write("<h2>Shopping Cart</h2>")

var priceOfitem1 = 650;
var priceOfitem2 = 100;
var quantityOfitem1 = 3;
var quantityOfitem2 = 7;
var shippingCharges = 100;

var totalItem1 = priceOfitem1* quantityOfitem1;
var totalItem2 = priceOfitem2*quantityOfitem2;
var totalAmount =  totalItem1 +   totalItem2 + shippingCharges;

document.write("price Of Item 1 is 650" + "<br><br>")
document.write("Quantity Of Item 1 is 3" + "<br><br>")
document.write("price Of Item 2 is 100" + "<br><br>")
document.write("Quantity Of Item 2 is 7" + "<br><br>")
document.write("Price Of item1 = 100" + "<br><br><br>")
document.write("Total Cost Of Your Order is" +totalAmount)

// Question # 8
document.write("<h1>Question # 8</h1>")
document.write("<h2>Marks Sheet</h2>" + "<br>")

var totalMarks = 980
var obtainedMarks = 804
var percentage = (804 / 980) * 100

document.write("totalMarks = 980" + "<br><br>")
document.write("obtainedMarks = 804" + "<br><br>")
document.write("Total Cost Of Your Order is" +percentage + "%")

// Question # 9
document.write("<h1>Question # 9</h1>")

var usDollars = 10 *104.80
var saudiRiyals = 25* 28
var totalCurrency = usDollars + saudiRiyals

document.write("Total Currency in PKR:" +totalCurrency )

// Question # 10
document.write("<h1>Question # 10</h1>")
var a = 5 
var b = 10
var c = a*b
var d = c /2

document.write(d)


// Question # 11
document.write("<h1>Question # 11</h1>")
document.write("<h2>Age Calculator</h2>")

var currentYear = 2023
var birthYear   = 1991
var yourAge  = currentYear % birthYear

document.write("Current Year" +currentYear + "<br>" )
document.write("Birth Year" +birthYear + "<br>")
document.write("Your Age" + yourAge + "<br>" )



// Question # 12
document.write("<h1>Question # 12</h1>")
document.write("<h2>The Geometrizer</h2>")

var  radius = 20
var circumference = 3.142
var area = 3.142



// Question # 13
document.write("<h1>Question # 13</h1>")
document.write("<h2>The Lifetime Supply Calculator</h2>")


var favoriteSnack = "Chocolate chip"
var currentAge  =31
var maximumAge = 70
var amountPerday =  8
var  Calculate =  maximumAge - currentAge 
var total = Calculate * amountPerday
  

 document.write("Favorite Snack: Chocolate chip" +"<br>" )
 document.write("Current Age:"+ currentAge + "<br>" )
 document.write("Maximum Age:"+ maximumAge + "<br>" )
 document.write("Amount Of Snack per day:  "+ amountPerday + "<br>" )
 document.write("You will need" + total + favoriteSnack +" to last you until the ripe old age of "+ maximumAge+ "<br>" )
 