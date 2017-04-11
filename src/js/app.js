
var resultTest20 = Math.floor((Math.random() * 20) + 1);
var testQuant = $ ( "#dice-quantity" ).val();
var testSides = $ ( "#number-of-sides" ).val();
// var testQuant = 2;
// var testSides = 20;
var resultTestForm = Math.floor((Math.random() * $ ( "#dice-quantity" ).val() * $ ( "#number-of-sides" ).val()) + 1);