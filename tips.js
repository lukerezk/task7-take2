//alert($);
$('form').on('submit', function(e){
    e.preventDefault();
    //^retains values after you press submit
alert('Thank You For Your Input!');

var billAmount=$('#billAmount').val();
var numberOfPeople = $('#numberOfPeople').val(),
    tipPercentage = $('#tipPercentage').val();

    console.log(billAmount,numberOfPeople,tipPercentage);

    var tipAmount = parseFloat(billAmount) * parseFloat(tipPercentage)/100;
    var fullTotal = parseFloat(billAmount) + parseFloat(tipAmount);
    var totalPerPerson = parseFloat(fullTotal/numberOfPeople).toFixed(2);
    var html = '<p>Full Total: $' + fullTotal + '</p>';
    html = html + '<p>Per Person: $ ' + totalPerPerson + '</p>';
    $('#result').html(html);

});

